import { ApiResponse, httpClient } from '~/common/api/httpClient';
import { apiConstants } from '~/common/api/apiConstants';
import {CompanyList} from '~/common/api/service/company/dto/companyApiDto';
class CompanyApi {
  companyList(): Promise<ApiResponse<CompanyList>> {
    return httpClient.httpGet(apiConstants.company.list,'');
  }
}


export const companyApi = new CompanyApi();
