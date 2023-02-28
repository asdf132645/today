import { ChronoUnit, DateTimeFormatter,LocalTime } from 'js-joda';

export default class TimeUtils {
  static nowSeconds(): number {
    return Math.floor(Date.now() / 1000);
  }

  static toSeconds(date:Date): number {
    return Math.floor(date.getTime() / 1000);
  }

  static toHourCaption(hour: number): string {
    switch (hour) {
      case 0: return '밤 12시';
      case 1: return '오전 1시';
      case 2: return '오전 2시';
      case 3: return '오전 3시';
      case 4: return '오전 4시';
      case 5: return '오전 5시';
      case 6: return '오전 6시';
      case 7: return '오전 7시';
      case 8: return '오전 8시';
      case 9: return '오전 9시';
      case 10: return '오전 10시';
      case 11: return '오전 11시';
      case 12: return '낮 12시';
      case 13: return '오후 1시';
      case 14: return '오후 2시';
      case 15: return '오후 3시';
      case 16: return '오후 4시';
      case 17: return '오후 5시';
      case 18: return '오후 6시';
      case 19: return '오후 7시';
      case 20: return '오후 8시';
      case 21: return '오후 9시';
      case 22: return '오후 10시';
      case 23: return '오후 11시';
      default: return '';
    }
  }

  // H ==> HH:00:00
  static isoStrFromHour(hour:number): string {
    return `${this.zeroFilled2Digit(hour)}:00:00`;
  }

  static isoStrOfLocalTime(time: LocalTime): string {
    return time.format(DateTimeFormatter.ofPattern('HH:mm:ss'));
  }

  // HH:mm:ss ==> LocalTime
  static toLocalTimeFromIsoStr(isoStr: string): LocalTime {
    return LocalTime.parse(isoStr, DateTimeFormatter.ofPattern('HH:mm:ss'));
  }

  // HH:mm:ss ==> H시m분
  static koreanHhmmStrFromIsoStr(isoStr: string): string {
    const time = this.toLocalTimeFromIsoStr(isoStr);
    return this.koreanHhmmStr(time);
  }

  // LocalTime ==> H시m분
  static koreanHhmmStr(time:LocalTime): string {
    if (time.minute() === 0) {
      return time.format(DateTimeFormatter.ofPattern('H시'));
    } else {
      return time.format(DateTimeFormatter.ofPattern('H시 m분'));
    }
  }

  // HH:mm:ss ==> 오전/오후 H시m분
  static koreanAhmStrFromIsoStr(isoStr: string): string {
    const time = this.toLocalTimeFromIsoStr(isoStr);
    return this.koreanAhmStr(time);
  }

  // LocalTime ==> 오전/오후 H시m분
  static koreanAhmStr(time:LocalTime): string {
    let amPm = '오전';
    let hour = `${time.hour()}시`;

    if (time.hour() === 12) {
      amPm = '낮';
    } else if (time.hour() === 0) {
      amPm = '밤';
      hour = '12시';
    } else if (time.hour() > 12) {
      amPm = '오후';
      hour = `${time.hour() - 12}시`;
    }

    if (time.minute() === 0) {
      return `${amPm} ${hour}`;
    } else {
      return `${amPm} ${hour} ${time.minute()}분`;
    }
  }

  // HH:mm:ss ==> 오전/오후 H:mm
  static ampmHmmStrFromIsoStr(isoStr: string): string {
    const time = this.toLocalTimeFromIsoStr(isoStr);
    return this.ampmHmmStr(time);
  }

  // LocalTime ==> 오전/오후 H:mm
  static ampmHmmStr(time:LocalTime): string {
    let amPm = '오전';
    let hour = time.hour();

    if (time.hour() === 12) {
      amPm = '낮';
    } else if (time.hour() === 0) {
      amPm = '밤';
      hour = 12;
    } else if (time.hour() > 12) {
      amPm = '오후';
      hour = time.hour() - 12;
    }

    return `${amPm} ${hour}:${this.zeroFilled2Digit(time.minute())}`;
  }

  // seconds(LocalTime, LocalTime)
  static differenceBetweenLocalTimes(time1:LocalTime, time2: LocalTime): number {
    return ChronoUnit.SECONDS.between(time1, time2);
  }

  // seconds(HH:mm:ss, HH:mm:ss)
  static differenceBetweenIsoStr(isoStr1: string, isoStr2: string): number {
    const time1 = this.toLocalTimeFromIsoStr(isoStr1);
    const time2 = this.toLocalTimeFromIsoStr(isoStr2);

    return this.differenceBetweenLocalTimes(time1, time2);
  }

  private static zeroFilled2Digit(num: number): string {
    return `0000${num.toString()}`.slice(-2);
  }
}
