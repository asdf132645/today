export interface CompanyList {
  companyList: CompanyDto,
}

export interface CompanyDto{
  // eslint-disable-next-line camelcase
  company_name: string;
  companyDescription: string;
  company_companyDetails: string;
  company_detail_address: string;
  imgUrl: string;
  rating: number;
  companyCode: string;
}

export interface companyDetailDto {
  company_name: string;
  companyDescription:string;
  companyType:string;
  address: string;
  detail_address: string;
  companyCode: string;
  createdAt: string;
  url: string;
}

export interface CompanyDetail {
  companyDetail : companyDetailDto;
  rating: number;

}
