export interface userDto {
  "id": string;
  "userName": string;
  "user_id": string;
  "role": string;
  "accountNumber": string;
  "accountName": string;
  "businessNumber": string;
  "service": string;
  "createdAt": string | null;
  "updatedAt": string | null;
  "deletedAt": string | null;
}

export interface reviewListDto {
  id: number;
  rating: number;
  text: string;
  createdAt: string;
  user: userDto;
  companyCode: string;
  likeCount: string;
  isLike: number;
}

export interface ReviewDto {
  reviewList: reviewListDto
}

