import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

import './index.less';

export default class Nav extends Component {
  render() {
    return (
      <View className='nav'>
        <View className='logo'>
          <Image className='image' src='https://cdn.shopify.com/s/files/1/0951/7126/t/768/assets/logo_240x.png?1485702' />
        </View>
        <View className='button'>
          {this.props.children}
        </View>
      </View>
    );
  }
}
