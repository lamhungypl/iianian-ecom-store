export class LoginResponseModel {
  public user_token: any;

  constructor(loginResponse: any) {
    this.user_token = loginResponse.data || '';
  }
}
