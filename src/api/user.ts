export class User {
  request: any;
  prefix: string;

  constructor(request: any) {
    this.request = request;
    this.prefix = 'api/user';
  }

  login = (data: { code: string }) => {
    return this.request.post(`${this.prefix}/login`, {
      data
    }) as Promise<any>;
  };
}
