import { ApiResponse, httpClient } from '~/common/api/httpClient';
import { apiConstants } from '~/common/api/apiConstants';

class ReviewsApi {

  reviewsList(review: string):Promise<ApiResponse<void>>{
    return httpClient.httpGet(apiConstants.reviews.list, review);
  }

}

export const reviewsApi = new ReviewsApi();
