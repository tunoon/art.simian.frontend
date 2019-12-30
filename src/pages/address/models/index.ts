export * from './create/actions';
export * from './list/actions';
export * from './omit/actions';
export * from './update/actions';

export interface IAddress {
  id?: string;
  name: string;
  province: string;
  city: string;
  district: string;
  detail: string;
  phone: string;
  isDefault: boolean;
}
