export class OrderHistoryResponseModel {
    public createdDate: string;
    public orderId: string;
    public total: number;
    public orderStatusId: string;
    public orderPrefixId: string;
    public orderStatus: any = {};

    constructor(historyResponse: any) {
        this.createdDate = historyResponse.createdDate || "";
        this.orderId = historyResponse.orderId || "";
        this.orderPrefixId = historyResponse.orderPrefixId || "";
        this.orderStatusId = historyResponse.orderStatusId || "";
        this.total = historyResponse.total || 0;
        this.orderStatus = historyResponse.orderStatus || "";
    }
}
