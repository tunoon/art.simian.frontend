import { IState as AddressState } from '@pages/address/models/list/reducer';
import { IState as AuthState } from './global/auth/reducer';
import { IState as LoginState } from './global/login/reducer';
import { IState as LoadingState } from './global/loading/reducer';

export interface RootState {
  global: {
    auth: AuthState;
    login: LoginState;
    loading: LoadingState;
  };
  pages: {
    address: AddressState;
  };
}
