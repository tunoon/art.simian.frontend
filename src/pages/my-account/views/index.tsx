import Taro, { Component } from '@tarojs/taro';
import { Block, View } from '@tarojs/components';

import { connect } from '@tarojs/redux';
import { compose, Dispatch } from 'redux';

import * as actions from '../models/actions';

import Layout from '@layout/index';
import { Btn } from '@components';

import './index.less';

interface IProps {
  login: (params: actions.IParams) => any;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: compose(
    dispatch,
    actions.login.start
  )
});

const mapStateToProps = state => {
  const {} = state;
  return {};
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
        this.props.login({ code });
      }
    });
  };
  render() {
    return (
      <Layout>
        <View className='my'>
          <Block>
            <View className='title'>用户登录</View>
            <View className='button-wrap' onClick={this.handleLogin}>
              <Btn>微信一键登录</Btn>
            </View>
          </Block>
        </View>
      </Layout>
    );
  }
}

export default MyAccount;
