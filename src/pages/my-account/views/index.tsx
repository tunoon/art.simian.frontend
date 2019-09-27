import Taro, { Component } from '@tarojs/taro';
import { Block, View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { compose, Dispatch, AnyAction } from 'redux';
import { auth, IParams as AuthParams } from '@models/global/auth/actions';
import { IState as AuthState } from '@models/global/auth/reducer';
import { login, IParams as LoginParams } from '@models/global/login/actions';
import { RootState } from '@models/interface';
import { IState as LoginState } from '@models/global/login/reducer';
import { ActionWithPayload } from '@library/redux-act/createAction';
import Layout from '@layout/index';
import { VButton } from '@components';

import './index.less';

interface IProps {
  auth: AuthState;
  login: LoginState;
  onLogin: (params: LoginParams) => ActionWithPayload<string, LoginParams>;
  onUpdateAuth: (params: AuthParams) => ActionWithPayload<string, AuthParams>;
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  onLogin: compose(
    dispatch,
    login.start
  ),
  onUpdateAuth: compose(
    dispatch,
    auth.start
  )
});

const mapStateToProps = (state: RootState) => {
  const { auth, login } = state.global;
  return { auth, login };
};
@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class MyAccount extends Component<IProps> {
  config = {
    navigationBarTitleText: '我的'
  };

  handleLogin = () => {
    Taro.login().then(res => {
      const { code } = res;
      if (code) {
        Taro.getUserInfo().then(res => {
          const { encryptedData, iv } = res;
          this.props.onLogin({ code, encryptedData, iv });
        });
      }
    });
  };

  onUpdateAuth = () => {
    this.props.onUpdateAuth({ userInfo: true });
    this.handleLogin();
  };

  render() {
    const { auth, login } = this.props;
    return (
      <Layout>
        <View className='my'>
          <Block>
            <View className='title'>用户登录</View>
            {login.isLogined ? (
              <View onClick={this.handleLogin} className='button-wrap'>
                <VButton>已登录</VButton>
              </View>
            ) : auth.userInfo ? (
              <View onClick={this.handleLogin} className='button-wrap'>
                <VButton>微信一键登录</VButton>
              </View>
            ) : (
              <View className='button-wrap'>
                <VButton
                  openType='getUserInfo'
                  onUpdateAuth={this.onUpdateAuth}
                >
                  微信一键登录
                </VButton>
              </View>
            )}
          </Block>
        </View>
      </Layout>
    );
  }
}
