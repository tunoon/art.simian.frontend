import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import Iconfont from '../../components/iconfont/index';

import './index.less';

export default class Nav extends Component {
  render() {
    return (
      <View className='nav'>
        <View className='logo'>
          <Image src='https://cdn.shopify.com/s/files/1/0951/7126/t/768/assets/logo_240x.png?1485702' />
        </View>
        <View className='button'>
          <Iconfont name='cart' size={24} />
          <Iconfont name='more' size={24} />
        </View>
      </View>
    );
  }
}
