import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Btn from '@components/button';

import './index.less';

export default class Subtotal extends Component {
  render() {
    return (
      <View className='subtotal'>
        <Text className='header'>Your Cart</Text>
        <View className='detail'>
          <View className='item'>
            <Text className='title'>subtotal:</Text>
            <Text className='price'>$369.00 USD</Text>
          </View>
          <View className='item'>
            <Text className='title'>Shipping:</Text>
            <Text className='price'>Free</Text>
          </View>
        </View>
        <View className='button-wrap'>
          <Btn width={670}>checkout</Btn>
        </View>
      </View>
    );
  }
}
