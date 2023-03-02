import { ApiResponse, httpClient } from '~/common/api/httpClient';
import { apiConstants } from '~/common/api/apiConstants';
import {login,logout , myPage, userCreateAdd} from '~/common/api/service/user/dto/userApiDto';
import {userStore} from "~/store";
class UserApi {
  createUser(request: userCreateAdd): Promise<ApiResponse<void>> {
    return httpClient.httpPost(apiConstants.user.create, request, null);
  }

  login(request: login): Promise<ApiResponse<void>> {
    return httpClient.httpPost(apiConstants.user.login, request, null);
  }

  myPage(request: myPage): Promise<ApiResponse<void>>{
    return httpClient.httpPost(apiConstants.user.myPage, request, userStore.accessToken);
  }

  logout(request: logout): Promise<ApiResponse<void>>{
    // console.log(userStore.accessToken)
    return httpClient.httpPost(apiConstants.user.logout, request, userStore.accessToken);
  }

}

export const userApi = new UserApi();
