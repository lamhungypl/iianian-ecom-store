export class FeaturedProductModel {
  public limit: number;
  public offset: number;
  public keyword: string;
  public sku: string;
  public count: boolean;

  constructor(featuredRequest: any) {
    this.limit = featuredRequest.limit || 0;
    this.offset = featuredRequest.offset || 0;
    this.keyword = featuredRequest.keyword || '';
    this.sku = featuredRequest.sku || '';
    this.count = featuredRequest.count || false;
  }
}
