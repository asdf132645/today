import axios, { AxiosRequestConfig } from 'axios';
import { GenericObject } from '~/common/type/generalTypes';
import ServerUrlDefines from '~/common/defines/serverUrlDefines';
import TokenUtils from "~/common/lib/utils/tokenUtils";
import {userStore} from "~/store";
import {apiConstants} from "~/common/api/apiConstants";
import {RefreshReplyDto} from "~/common/api/service/user/dto/userApiDto";
import UserStoreUtils from "~/store/utils/userStoreUtils";
import {StoreRefreshTokenParam} from "~/store/types/userStoreType";

export interface ApiResponse<T> {
  code: number;
  data: T | null;
  msg: string;
}



interface HttpResponse<T> {
  data: ApiResponse<T>
}

class HttpClient {
  async httpGet<T>(url: string): Promise<ApiResponse<T>> {
    try {
      const response: HttpResponse<T> = await axios.get(ServerUrlDefines.apiServer + url);
      return Promise.resolve(response.data);
    } catch (e){
      return Promise.reject(e);
    }
  }

  async httpPost<T>(url: string, payload: GenericObject, token: string | null): Promise<ApiResponse<T>> {
    console.log(userStore.accessExpiresAt)
    if (userStore.accessExpiresAt !== null) {
      if (TokenUtils.tokenExpiring(userStore.accessExpiresAt)) {
        try {
          return await this.refreshTokenAct();
        } catch (e) {
          return Promise.reject(e);
        }
      }
    }

    return this.httpPostAct(url, payload, token);
  }

  private async httpPostAct<T>(url: string, payload: GenericObject, token: string | null): Promise<ApiResponse<T>> {
    const options: AxiosRequestConfig = {
      headers: {
        'Content-Type' : 'application/json',
      },
    };
    options.headers.Authorization = ` Bearer ${token}`;
    axios.defaults.withCredentials = true;
    try {
      const response: HttpResponse<T> = await axios.post(ServerUrlDefines.apiServer + url, payload, options);
      return Promise.resolve(response.data);
    }catch (e){
      return Promise.reject(e);
    }
  }

  async refreshTokenAct(): Promise<any> {
    const apiResponse: ApiResponse<RefreshReplyDto> = await this.httpPost(apiConstants.auth.refresh,  {userId:userStore.userId,}, userStore.accessToken );
    if (apiResponse.data?.accessToken) {
      UserStoreUtils.refreshAccessToken(StoreRefreshTokenParam.of(userStore.staySignedIn ?? false, apiResponse.data));
      return Promise.resolve(apiResponse.data);
    }
  }

}

export const httpClient = new HttpClient();
