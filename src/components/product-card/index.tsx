import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';

import './index.less';

export default class ProductCard extends Component {
  render() {
    return (
      <View className='product-card'>
        <Image src='//cdn.shopify.com/s/files/1/0951/7126/products/super-plush-starter-towel-set_white_silo_61d20794-614f-4c45-a7ce-e0a81d664383_480x.jpg?v=1556639553' className='image'></Image>
        <View className='header'>Bath Towel Bundle</View>
        <View className='price'>
          From
          <Text className='original'>$109</Text>
          <Text className='discount'>$98.10</Text>
        </View>
        <View className='reviews'>
          <View className='star'></View>
          <View className='count'>232 Reviews</View>
        </View>
        <View className='suit'>
        2 Bath Towels, 2 Hand Towels, 1 Bath Mat
        </View>
      </View>
    );
  }
}
