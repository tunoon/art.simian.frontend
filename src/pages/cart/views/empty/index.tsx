import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import VButton from '@components/button';

import './index.less';

export default class Empty extends Component {
  render() {
    return (
      <View className='empty'>
        <Image
          className='image'
          src='//cdn.shopify.com/s/files/1/0951/7126/files/module--empty-cart.png?1498888'
        />
        <Text className='desc'>&quot;I&apos;m empty inside.&quot;</Text>
        <Text className='desc'> — Your cart</Text>
        <View className='button-wrap'>
          <VButton width={670}>Start shopping</VButton>
        </View>
      </View>
    );
  }
}
