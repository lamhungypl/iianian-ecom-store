export class FeaturedProductResponseModel {
  public productId: string;
  public title: string;
  public name: string;
  public price: string;
  public sku: string;
  public quantity: number;
  public image: Array<any>;
  public rating: number;
  public flag: any;
  public pricerefer: any;

  constructor(featuredResponse: any) {
    this.flag = featuredResponse.flag || '';
    this.pricerefer = featuredResponse.pricerefer || '';
    this.productId = featuredResponse.productId || '';
    this.title = featuredResponse.metaTagTitle || '';
    this.name = featuredResponse.name || '';
    this.price = featuredResponse.price || '';
    this.sku = featuredResponse.sku || '';
    this.quantity = featuredResponse.quantity || 0;
    this.image = featuredResponse.Images;
    this.rating = featuredResponse.rating || 0;
  }
}
