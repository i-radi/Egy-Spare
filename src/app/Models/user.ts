export class User {
  /**
   *
   */
  constructor(
    public Name: string,
    public UserName: string,
    public Email: string,
    public Password: string,
    public PhoneNumber: string,
    public ConfirmPassword: string,
    public role: any
  ) {}
}
