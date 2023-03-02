import { ApiResponse, httpClient } from '~/common/api/httpClient';
import { apiConstants } from '~/common/api/apiConstants';
import {BoardAdd} from "~/common/api/service/board/dto/boardApiDto";
import {userStore} from "~/store";

class BoardApi {
  inquiryAdd(request: BoardAdd): Promise<ApiResponse<void>> {
    return httpClient.httpPost(apiConstants.board.list, request, userStore.accessToken);
  }
}

export const boardApi = new BoardApi();
