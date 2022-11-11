export class ResponseBody {
  /**
   *
   */
  constructor(
    public message: string,
    public isAuthenticated: boolean,
    public username: string,
    public email: string,
    public role: string,
    public token: string
  ) {}
}
