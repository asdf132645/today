import axios, {AxiosRequestConfig} from 'axios';
import ServerUrlDefines from '~/common/defines/serverUrlDefines';
import TokenUtils from "~/common/lib/utils/tokenUtils";
import {userStore} from "~/store";
import {apiConstants} from "~/common/api/apiConstants";
import {RefreshReplyDto} from "~/common/api/service/user/dto/userApiDto";
import UserStoreUtils from "~/store/utils/userStoreUtils";
import {StoreRefreshTokenParam} from "~/store/types/userStoreType";
import RouterUtils from "~/common/lib/routerUtils";
import { Endpoint, GenericObject } from '~/common/type/generalTypes';


export interface ApiResponse<T> {
  code: number;
  data: T | any;
  msg: string;
}


interface HttpResponse<T> {
  data: ApiResponse<T>
}

class HttpClient {
  async httpGet<T>(url: Endpoint, parameters: string): Promise<ApiResponse<T>> {
    let token: string | null = null;

    console.log(userStore.accessExpiresAt);
    // return await this.refreshTokenAct();
    if (userStore.accessExpiresAt !== null) {
      if (TokenUtils.tokenExpiring(userStore.accessExpiresAt)) {
        try {
          token = await this.refreshTokenAct();
        } catch (e) {
          return Promise.reject(e);
        }
      }
    } else {
      token = userStore.accessToken;
    }
    return this.httpGetAct(url.endpoint, parameters, token);
  }

  private async httpGetAct<T>(url: string, parameters: string, token: string | null,): Promise<ApiResponse<T>> {

    const options: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    options.headers.Authorization = ` Bearer ${token}`;
    axios.defaults.withCredentials = true;
    try {
      const response: HttpResponse<T> = await axios.get(ServerUrlDefines.apiServer + url + '/' + parameters, options);
      return Promise.resolve(response.data);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async httpPost<T>(url: Endpoint, payload: GenericObject): Promise<ApiResponse<T>> {

    let token: string | null = null;

    console.log(userStore.accessExpiresAt);
    // return await this.refreshTokenAct();
    if (url.requiresToken) {
      if (TokenUtils.tokenExpiring(userStore.accessExpiresAt)) {
        try {
          token = await this.refreshTokenAct();
        } catch (e) {
          return Promise.reject(e);
        }

      } else {
        token = userStore.accessToken;
      }
    }
    return this.httpPostAct(url.endpoint, payload, token);
  }

  private async httpPostAct<T>(url: string, payload: GenericObject, token: string | null): Promise<ApiResponse<T>> {
    const options: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    options.headers.Authorization = ` Bearer ${token}`;
    axios.defaults.withCredentials = true;
    try {
      const response: HttpResponse<T> = await axios.post(ServerUrlDefines.apiServer + url, payload, options);
      return Promise.resolve(response.data);
    } catch (e) {
      // alert(e);
      return Promise.reject(e);
    }
  }

  async refreshTokenAct(): Promise<any> {
    if (UserStoreUtils.refreshTokenExpiring()) {
      alert('로그인이 만료되었습니다, 다시 로그인해 주세요.');
      RouterUtils.goTo('/login');
      userStore.updateUserIdStr('');
      UserStoreUtils.clearAll();
      return Promise.reject(new Error('로그인이 만료되었습니다, 다시 로그인해 주세요.'));
    }
    console.log(userStore.refreshTokentwo);
    const apiResponse: ApiResponse<RefreshReplyDto> = await this.httpPostAct(apiConstants.auth.refresh.endpoint, {
      userId: userStore.userId,
      currentHashedRefreshToken: userStore.refreshTokentwo
    }, userStore.accessToken);
    if (apiResponse.data?.access?.accessToken) {
      UserStoreUtils.refreshAccessToken(StoreRefreshTokenParam.of(userStore.staySignedIn ?? false, apiResponse.data));
      return Promise.resolve(apiResponse.data.access.accessToken);
    }
  }

}

export const httpClient = new HttpClient();
