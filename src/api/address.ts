interface IAddress {
  id?: string;
  name: string;
  province: string;
  city: string;
  district: string;
  detail: string;
  phone: string;
  isDefault: boolean;
}

export class Address {
  request: any;
  RESTful: string;

  constructor(request: any) {
    this.request = request;
    this.RESTful = 'api/address';
  }

  getAddressList = () =>
    this.request.get(`${this.RESTful}/all`, {}) as Promise<any>;

  createAddress = (data: IAddress) => {
    return this.request.post(`${this.RESTful}/create`, {
      data
    }) as Promise<any>;
  };

  updateAddress = (data: IAddress) => {
    const { id, ...rest } = data;
    return this.request.post(`${this.RESTful}/update/${id}`, {
      rest
    }) as Promise<any>;
  };
}
