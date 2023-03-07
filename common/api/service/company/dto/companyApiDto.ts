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
}
