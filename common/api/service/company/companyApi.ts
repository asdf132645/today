import { ApiResponse, httpClient } from '~/common/api/httpClient';
import { apiConstants } from '~/common/api/apiConstants';
import {CompanyDetail, CompanyList} from '~/common/api/service/company/dto/companyApiDto';
class CompanyApi {
  companyList(): Promise<ApiResponse<CompanyList>> {
    return httpClient.httpGet(apiConstants.company.list,'');
  }

  companyDetail(companyCode: string): Promise<ApiResponse<CompanyDetail>> {
    // detail
    return httpClient.httpGet(apiConstants.company.detail,`${companyCode}`);
  }
}


export const companyApi = new CompanyApi();
