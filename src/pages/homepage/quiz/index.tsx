import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.less';

export default class Quiz extends Component {
  render() {
    return (
      <View className='quiz'>
        <Text>不确定如何开始</Text>
        <View>Take the quiz</View>
      </View>
    );
  }
}
