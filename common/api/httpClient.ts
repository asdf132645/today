import axios from 'axios';
import { GenericObject } from '~/common/type/generalTypes';
import ServerUrlDefines from '~/common/defines/serverUrlDefines';

export interface ApiResponse<T> {
  data: T | null;
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

  async httpPost<T>(url: string, payload: GenericObject): Promise<ApiResponse<T>> {
    try {
      const response: HttpResponse<T> = await axios.post(ServerUrlDefines.apiServer + url, payload);
      return Promise.resolve(response.data);
    }catch (e){
      return Promise.reject(e);
    }
  }
}

export const httpClient = new HttpClient();
