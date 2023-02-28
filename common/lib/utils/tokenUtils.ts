import TimeUtils from '~/common/lib/utils/timeUtils';

export default class TokenUtils {
  static tokenExpired(expiresAt:number|null): boolean {
    return expiresAt == null || expiresAt < TimeUtils.nowSeconds();
  }

  static tokenExpiredAtDate(expiresAt:number|null, date:Date): boolean {
    return expiresAt == null || expiresAt < TimeUtils.toSeconds(date);
  }

  static tokenExpiredAtTime(expiresAt:number|null, timeInSeconds:number): boolean {
    return expiresAt == null || expiresAt < timeInSeconds;
  }

  static tokenExpiring(expiresAt:number|null): boolean {
    // 회원일 경우 2591970 로 테스트 비회원일 경우 - 3500 으로 테스트
    // return expiresAt == null || (expiresAt - 180) < TimeUtils.nowSeconds() 2591970 ;
    // console.log(((expiresAt! - 180)));
    // console.log(TimeUtils.nowSeconds());
    // console.log(expiresAt == null || (expiresAt - 180) < TimeUtils.nowSeconds());
    return expiresAt == null || (expiresAt - 180) < TimeUtils.nowSeconds() ;
  }

  static toExpiresAt(expiresIn:number|null|undefined): number|undefined {
    if (expiresIn) {
      return expiresIn + TimeUtils.nowSeconds();
    }
    return undefined;
  }
}
