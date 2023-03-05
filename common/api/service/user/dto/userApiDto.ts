export interface userCreateAdd {
  user_id: string;
  password: string;
  userName: string;
  email: string;
  role: string;
  accountNumber: string;
  accountName: string;
  businessNumber: string;
  service:string;
}


export interface UserTokenDto {
  accessToken: string;
  expiresIn: number;

  refreshToken: string;
}


//
// 리프레시 토큰logout
//
export interface RefreshReplyDto {
  access: UserTokenDto;
}

export interface login {
  user_id: string;
  password: string;
}

export interface LoginReplyDto {
  access: UserTokenDto;
  refresh: UserTokenDto;
  role: string;
  // refresh: UserTokenDto;
}

export interface myPage {
  user_id: string;
}

export interface logout {
  user_id: string | null;
}
