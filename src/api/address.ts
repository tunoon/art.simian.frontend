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
  prefix: string;

  constructor(request: any) {
    this.request = request;
    this.prefix = 'api/address';
  }

  getAddressList = () =>
    this.request.get(`${this.prefix}/get/all`, {}) as Promise<any>;

  createAddress = (params: IAddress) =>
    this.request.post(`${this.prefix}/create`, {
      data: params
    }) as Promise<any>;

  updateAddress = (params: IAddress) => {
    const { id, ...rest } = params;
    return this.request.put(`${this.prefix}/update/${id}`, {
      data: rest
    }) as Promise<any>;
  };

  deleteAddress = (params: { id: string }) =>
    this.request.delete(`${this.prefix}/delete/${params.id}`) as Promise<any>;
}
