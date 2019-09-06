
import { Fetch } from '@common/helpers/fetch';

import { User } from './user';
import { Address } from './address';

export const createClient = () => {
  const fetchInstance = new Fetch();

  return {
    user: new User(fetchInstance),
    address: new Address(fetchInstance)
  };
};
