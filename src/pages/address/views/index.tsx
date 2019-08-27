import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import Layout from '@layout/index';
import Header from './header/index';
import Edit from './edit/index';
import './index.less';

export default class Address extends Component {
  config = {
    navigationBarTitleText: '我的地址'
  };
  state = {
    isOpenAddress: false
  };
  handleToggleOpenAddress() {
    const { isOpenAddress } = this.state;
    this.setState({ isOpenAddress: !isOpenAddress });
  }
  render() {
    return (
      <Layout>
        <View className='address'>
          <Header onToggleOpenAddress={this.handleToggleOpenAddress}></Header>
          {this.state.isOpenAddress && <Edit />}
        </View>
      </Layout>
    );
  }
}
