import { ProductOptionValueDetailMandatoryResponseModel } from './product-option-value-detail-mandatory-response.model';

export class ProductOptionsDetailMandatoryResponseModel {
  public optionId: number;
  public optionValue: ProductOptionValueDetailMandatoryResponseModel;
  public optionname: string;
  public optiontype: string;
  public productId: any;
  public productOptionId: number;
  public required: number;
  public value: string;

  constructor(listOptionsResponse: any) {
    this.optionId = listOptionsResponse.optionId || 0;
    this.optionValue = listOptionsResponse.optionValue || [];
    this.optionname = listOptionsResponse.optionname || '';
    this.optiontype = listOptionsResponse.optiontype || '';
    this.productId = listOptionsResponse.productId || '';
    this.productOptionId = listOptionsResponse.productOptionId || 0;
    this.required = listOptionsResponse.required || 0;
    this.value = listOptionsResponse.value || '';
  }
}
