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
  Prefix: string;

  constructor(request: any) {
    this.request = request;
    this.Prefix = 'api/address';
  }

  getAddressList = () =>
    this.request.get(`${this.Prefix}/all`, {}) as Promise<any>;

  createAddress = (params: IAddress) =>
    this.request.post(`${this.Prefix}/create`, {
      data: params
    }) as Promise<any>;

  updateAddress = (params: IAddress) => {
    const { id, ...rest } = params;
    return this.request.put(`${this.Prefix}/update/${id}`, {
      data: rest
    }) as Promise<any>;
  };

  deleteAddress = (params: { id: string }) =>
    this.request.delete(`${this.Prefix}/delete/${params.id}`) as Promise<any>;
}
