export class ChangePasswordModel {
  public oldPassword: any;
  public newPassword: any;

  constructor(loginRequest: any) {
    this.oldPassword = loginRequest.currentPassword || '';
    this.newPassword = loginRequest.newPassword || '';
  }
}
