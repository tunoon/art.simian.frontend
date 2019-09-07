export class User {
  request: any;
  RESTful: string;

  constructor(request: any) {
    this.request = request;
    this.RESTful = 'api/user';
  }

  login = (data: { code: string }) => {
    console.log(data);
    return this.request.post(`${this.RESTful}/login`, {
      data
    }) as Promise<any>;
  };
}
