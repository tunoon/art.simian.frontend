export class User {
  request: any;
  Prefix: string;

  constructor(request: any) {
    this.request = request;
    this.Prefix = 'api/user';
  }

  login = (data: { code: string }) =>
    this.request.post(`${this.Prefix}/login`, {
      data
    }) as Promise<any>;
}
