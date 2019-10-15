import Taro, { Component } from '@tarojs/taro';
import { View, Block } from '@tarojs/components';

export default class Option extends Component {
  state = {};

  config = {
    navigationBarTitleText: ''
  };

  render() {
    const sizeModal = <Block>123</Block>;
    return (
      <View className='option'>
        <View className='header'>
          <View className='title'>Color</View>
          <View className='value'>red</View>
          {sizeModal}
          {/* <View className='tip-modal'></View> */}
        </View>
        <View className='options' />
      </View>
    );
  }
}
