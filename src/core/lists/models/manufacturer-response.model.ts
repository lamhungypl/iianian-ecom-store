export class ManufacturerResponseModel {
  public manufacturerId: string;
  public image: string;
  public imagePath: string;
  public isActive: string;
  public name: string;
  public sortOrder: string;

  constructor(listResponse: any) {
    this.manufacturerId = listResponse.manufacturerId || '';
    this.image = listResponse.image || '';
    this.imagePath = listResponse.imagePath || '';
    this.isActive = listResponse.isActive || '';
    this.name = listResponse.name || '';
    this.sortOrder = listResponse.sortOrder || '';
  }
}
