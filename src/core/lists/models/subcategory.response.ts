export class SubcategoryResponseModel {
  public categoryId: number;
  public parentInt: number;
  public sortOrder: number;
  public levels: Array<any>;
  constructor(subcategoryresponse: any) {
    this.categoryId = subcategoryresponse.categoryId || '';
    this.parentInt = subcategoryresponse.parentInt || '';
    this.sortOrder = subcategoryresponse.sortOrder || '';
    this.levels = subcategoryresponse.levels || [];
  }
}
