export interface userCreateAdd {
  userId: string;
  password: string;
  userName: string;
  email: string;
  role: string;
  accountNumber: string;
  accountName: string;
  businessNumber: string;
  service:string;
}




//
// 리프레시 토큰
//
export interface RefreshReplyDto {
  accessToken: string;
  expiresIn: number;
}

export interface login {
  userId: string;
  password: string;
}

export interface LoginReplyDto {
  accessToken: string;
  expiresIn: number;
  role: string;
  // refresh: UserTokenDto;
}

export interface myPage {
  userId: string;
}
