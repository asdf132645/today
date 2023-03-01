import { ApiResponse, httpClient } from '~/common/api/httpClient';
import { apiConstants } from '~/common/api/apiConstants';
import {login, myPage, userCreateAdd} from '~/common/api/service/user/dto/userApiDto';
class UserApi {
  createUser(request: userCreateAdd): Promise<ApiResponse<void>> {
    return httpClient.httpPost(apiConstants.user.create, request);
  }

  login(request: login): Promise<ApiResponse<void>> {
    return httpClient.httpPost(apiConstants.user.login, request);
  }

  myPage(request: myPage): Promise<ApiResponse<void>>{
    return httpClient.httpPost(apiConstants.user.myPage, request);
  }
}

export const userApi = new UserApi();
