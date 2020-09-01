export class OrderHistoryRequestModel {
  public limit: any;
  public offset: any;
  public count: number;

  constructor(historyRequest: any) {
    this.limit = historyRequest.limit || 10;
    this.offset = historyRequest.offset || 0;
    this.count = historyRequest.count || 0;
  }
}
