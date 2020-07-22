export class OrderHistoryRequestModel {
  public limit: any;
  public offset: any;
  public count: number;

  constructor(historyRequest: any) {
    this.limit = historyRequest.limit || '';
    this.offset = historyRequest.offset || '';
    this.count = historyRequest.count || 0;
  }
}
