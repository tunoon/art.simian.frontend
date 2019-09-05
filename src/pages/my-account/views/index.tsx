import Taro, { Component } from '@tarojs/taro';
import { Block, View } from '@tarojs/components';
import Layout from '@layout/index';
import { Btn } from '@components';

import './index.less';

export default class MyAccount extends Component {
  config = {
    navigationBarTitleText: '我的'
  };

  state = {};

  render() {
    return (
      <Layout>
        <View className='my'>
          <Block>
            <View className='title'>用户登录</View>
            <View className='button-wrap'>
              <Btn>微信一键登录</Btn>
            </View>
          </Block>
        </View>
      </Layout>
    );
  }
}
