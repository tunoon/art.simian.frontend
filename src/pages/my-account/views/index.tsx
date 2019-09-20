import Taro, { Component } from '@tarojs/taro';
import { Block, View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { compose, Dispatch } from 'redux';
import { auth } from '@models/global/auth/actions';
import Layout from '@layout/index';
import { Btn } from '@components';
import { login, IParams } from '@models/global/login/actions';

import './index.less';

interface IProps {
  auth: { [key: string]: boolean };
  login: {
    isLogined: boolean;
  };
  onLogin: (params: IParams) => any;
  onUpdateAuth: any;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLogin: compose(
    dispatch,
    login.start
  ),
  onUpdateAuth: compose(
    dispatch,
    auth.start
  )
});

const mapStateToProps = state => {
  const { auth, login } = state.global;
  return { auth, login };
};
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class MyAccount extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  config = {
    navigationBarTitleText: '我的'
  };

  state = {};

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
                <Btn>已登录</Btn>
              </View>
            ) : auth.userInfo ? (
              <View onClick={this.handleLogin} className='button-wrap'>
                <Btn>微信一键登录</Btn>
              </View>
            ) : (
              <View className='button-wrap'>
                <Btn openType='getUserInfo' onUpdateAuth={this.onUpdateAuth}>
                  微信一键登录
                </Btn>
              </View>
            )}
          </Block>
        </View>
      </Layout>
    );
  }
}

export default MyAccount;
