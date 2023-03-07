import { ApiResponse, httpClient } from '~/common/api/httpClient';
import { apiConstants } from '~/common/api/apiConstants';
import {SmsAdd, SmsCheckAdd} from "~/common/api/service/sms/dto/smsDto";

class SmsApi {
  send(request: SmsAdd): Promise<ApiResponse<void>> {
    return httpClient.httpPost(apiConstants.sendSms.send, request);
  }

  smsCheck(request: SmsCheckAdd):Promise<ApiResponse<void>>{
    return httpClient.httpPost(apiConstants.sendSms.checkSms,request);
  }

}

export const smsApi = new SmsApi();
