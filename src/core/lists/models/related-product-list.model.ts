export class RelatedProductListModel {
  public name: string;
  public description: string;
  public price: string;
  public image: Array<any>;
  public productId: number;

  constructor(listResponse: any) {
    this.name = listResponse.name || '';
    this.description = listResponse.description || '';
    this.price = listResponse.price || '';
    this.image = listResponse.productImage || [];
    this.productId = listResponse.productId || 0;
  }
}
