export interface SizedImageType {
  img: string;
  width: number;
  height: number;
}

export interface SizedImageTypeExt extends SizedImageType {
  description: string;
}

export class SizedImageTypeUtil {
  static defaultSizedImageFromUrl(img: string): SizedImageType {
    return {
      img,
      width: 0,
      height: 0
    };
  }
}
