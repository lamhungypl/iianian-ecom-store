export class ContactUsRequestModel {
  public name: string;
  public email: string;
  public phoneNumber: string;
  public message: string;

  constructor(contactRequest: any) {
    this.name = contactRequest.name || '';
    this.email = contactRequest.email || '';
    this.phoneNumber = contactRequest.phone || '';
    this.message = contactRequest.message || '';
  }
}
