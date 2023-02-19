export default class RouterUtils {
  static goHome(): void {
    this.goTo('/');
  }

  static goTo(path: string): void {
    window.$nuxt.$router.push(path, () => {
      console.log('router push complete');
    });
  }

  static goToCompanyDetailPage(companyId: number, name: string): void {
    this.goTo(`/businessInfo/companyDetail/${companyId}?name=${name}`);
  }
}
