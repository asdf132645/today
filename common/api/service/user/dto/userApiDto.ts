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

export interface login {
  userId: string;
  password: string;
}
