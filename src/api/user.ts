export class User {
  request: any;
  RESTful: string;

  constructor(request: any) {
    this.request = request;
    this.RESTful = 'api/user';
  }
  
  login = () => this.request.get(`${this.RESTful}/login`, {}) as Promise<any>;
}
