export class LoginModel {
  public emailId: any;
  public password: any;

  constructor(loginRequest: any) {
    this.emailId = loginRequest.email || '';
    this.password = loginRequest.password || '';
  }
}
