import { Address } from './address';
import { Fetch } from '@helpers/fetch';

export const createClient = () => {
  const fetchInstance = new Fetch();
  return {
    address: new Address(fetchInstance)
  };
};
