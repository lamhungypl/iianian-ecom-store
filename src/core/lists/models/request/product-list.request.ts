export class ProductListRequest {
  public limit: number;
  public offset: number;
  public keyword: string;
  public manufacturerId: number;
  public categoryId: number;
  public priceFrom: number;
  public priceTo: number;
  public price: string;
  public priceOrder: string;
  public condition: string;
  public count: string;

  constructor(req: any) {
    this.limit = req.limit || 10;
    this.offset = req.offset || 0;
    this.keyword = req.keyword || '';
    this.manufacturerId = req.manufacturerId || undefined;
    this.categoryId = req.categoryId || undefined;
    this.priceFrom = req.priceFrom || undefined;
    this.priceTo = req.priceTo || undefined;
    this.price = req.price || '';
    this.priceOrder = req.priceOrder || undefined;
    this.condition = req.condition || undefined;
    this.count = req.count || undefined;
  }
}
