export class OrderHistoryResponseModel {
  public createdDate: string;
  public orderId: string;
  public total: number;
  public orderStatusId: string;

  constructor(historyResponse: any) {
    this.createdDate = historyResponse.createdDate || '';
    this.orderId = historyResponse.orderId || '';
    this.orderStatusId = historyResponse.orderStatusId || '';
    this.total = historyResponse.total || 0;
  }
}
