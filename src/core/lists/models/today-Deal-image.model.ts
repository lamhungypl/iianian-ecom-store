export class TodayDealImageModel {
  public containerName: string;
  public defaultImage: string;
  public productId: number;
  public image: string;

  constructor(todayDealsImageResponse: any) {
    this.containerName = todayDealsImageResponse.containerName || '';
    this.defaultImage = todayDealsImageResponse.defaultImage || '';
    this.productId = todayDealsImageResponse.productId || 0;
    this.image = todayDealsImageResponse.image || '';
  }
}
