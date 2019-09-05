export class Address {
  request: any;
  constructor(request: any) {
    this.request = request;
  }

  getAddressList = () => this.request.get('/all', {}) as Promise<any>;
}
