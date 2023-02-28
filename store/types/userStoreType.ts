import {
  LoginReplyDto, RefreshReplyDto,
} from '~/common/api/service/user/dto/userApiDto';

export class StoreLoginTokenParam {

  staySignedIn: boolean;
  auth?: LoginReplyDto;

  private constructor(staySignedIn: boolean, auth?: LoginReplyDto) {
    this.staySignedIn = staySignedIn;
    this.auth = auth;
  }

  static of(staySignedIn: boolean, auth?: LoginReplyDto): StoreLoginTokenParam {
    return new StoreLoginTokenParam(staySignedIn, auth);
  }
}

export class StoreRefreshTokenParam {
  staySignedIn: boolean;
  auth?: RefreshReplyDto;

  private constructor(staySignedIn: boolean, auth?: RefreshReplyDto) {
    this.staySignedIn = staySignedIn;
    this.auth = auth;
  }

  static of(staySignedIn: boolean, auth?: RefreshReplyDto): StoreRefreshTokenParam {
    return new StoreRefreshTokenParam(staySignedIn, auth);
  }
}


export class StoreUserStringParam {
  staySignedIn: boolean;
  value?: string;

  private constructor(staySignedIn: boolean, value?: string) {
    this.staySignedIn = staySignedIn;
    this.value = value;
  }

  static of(staySignedIn: boolean, value?: string): StoreUserStringParam {
    return new StoreUserStringParam(staySignedIn, value);
  }
}

export class StoreUserNumberParam {
  staySignedIn: boolean;
  value?: number;

  private constructor(staySignedIn: boolean, value?: number) {
    this.staySignedIn = staySignedIn;
    this.value = value;
  }

  static of(staySignedIn: boolean, value?: number): StoreUserNumberParam {
    return new StoreUserNumberParam(staySignedIn, value);
  }
}
