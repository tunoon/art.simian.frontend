import Taro, { Component } from '@tarojs/taro';
import { Block, View, Text, Navigator } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { compose, Dispatch, AnyAction } from 'redux';
import { auth, IParams as AuthParams } from '@models/global/auth/actions';
import { IState as AuthState } from '@models/global/auth/reducer';
import { login, IParams as LoginParams } from '@models/global/login/actions';
import { RootState } from '@models/interface';
import { IState as LoginState } from '@models/global/login/reducer';
import { Action, ActionWithPayload } from '@library/redux-act/createAction';
import { IAddress } from '@pages/address/models/interface';
import { load as loadAddress } from '@pages/address/models/list/actions';
import { Layout } from '@layout';
import { VButton } from '@components';

import './index.less';

interface IProps {
  auth: AuthState;
  login: LoginState;
  addressList: IAddress[];
  onLogin: (params: LoginParams) => ActionWithPayload<string, LoginParams>;
  onUpdateAuth: (params: AuthParams) => ActionWithPayload<string, AuthParams>;
  onGetAddressList: () => Action<string>;
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  onLogin: compose(
    dispatch,
    login.start
  ),
  onUpdateAuth: compose(
    dispatch,
    auth.start
  ),
  onGetAddressList: compose(
    dispatch,
    loadAddress.start
  )
});

const mapStateToProps = (state: RootState) => {
  const { auth, login } = state.global;
  const { list } = state.pages.address;
  return { auth, login, addressList: list };
};
@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class MyAccount extends Component<IProps> {
  componentDidMount() {
    this.props.onGetAddressList();
  }

  config = {
    navigationBarTitleText: '我的'
  };
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: '自定义转发标题',
      path: 'pages/my-account/views/index'
    };
  }
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
    const { auth, login, addressList } = this.props;
    const [address] = addressList;
    const logined = (
      <Block>
        <View className='title'>我的账号</View>
        <View className='order'>
          <View className='header'>订单历史</View>
          <Text className='text'>您还没有任何订单</Text>
        </View>
        <View className='wrap'>
          <View className='header'>账户详情</View>
          <View className='nickname'>{login.wechatNickname}</View>
          {addressList.length && (
            <View className='address'>
              {address.isDefault && (
                <Text className='text default'>默认地址</Text>
              )}
              <Text className='text region'>{`${address.province} ${address.city} ${address.district}`}</Text>
              <Text className='text detail'>{address.detail}</Text>
              <Text className='text phone'>{address.phone}</Text>
            </View>
          )}
          <Navigator
            url='/pages/address/views/index'
            className='text navigator'
          >
            查看地址({addressList.length})
          </Navigator>
        </View>
      </Block>
    );
    const authorized = (
      <Block>
        <View className='title'>用户登录</View>
        <View onClick={this.handleLogin} className='button-wrap'>
          <VButton>微信一键登录</VButton>
        </View>
      </Block>
    );
    const unauthorized = (
      <Block>
        <View className='title'>用户登录</View>
        <View className='button-wrap'>
          <VButton openType='getUserInfo' onUpdateAuth={this.onUpdateAuth}>
            微信一键登录
          </VButton>
        </View>
      </Block>
    );

    return (
      <Layout>
        <View className='my'>
          {login.isLogined
            ? logined
            : auth.userInfo
            ? authorized
            : unauthorized}
        </View>
      </Layout>
    );
  }
}
