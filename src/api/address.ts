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

  createAddress = (params: IAddress) => {
    return this.request.post(`${this.RESTful}/create`, {
      data: params
    }) as Promise<any>;
  };

  updateAddress = (params: IAddress) => {
    const { id, ...rest } = params;
    return this.request.put(`${this.RESTful}/update/${id}`, {
      data: rest
    }) as Promise<any>;
  };

  deleteAddress = (params: { id: string }) => {
    return this.request.delete(
      `${this.RESTful}/delete/${params.id}`
    ) as Promise<any>;
  };
}
