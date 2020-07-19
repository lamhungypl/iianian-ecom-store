export class AddresslistModel {
    public limit: number;
    public offset: number;
    public count: number;

    constructor(addresslistresponse: any) {
        this.limit = addresslistresponse.limit || 0;
        this.offset = addresslistresponse.offset || 0;
        this.count = addresslistresponse.count || 0;
    }
}
