import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import Layout from '@layout/index';

export default class MyAccount extends Component {
  config = {
    navigationBarTitleText: '我的'
  };

  state = {};

  render() {
    return (
      <Layout>
        <View>我的</View>
      </Layout>
    );
  }
}
