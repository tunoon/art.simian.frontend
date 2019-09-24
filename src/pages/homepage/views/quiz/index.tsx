import Taro, { Component } from '@tarojs/taro';
import { View, Text, Navigator } from '@tarojs/components';
import './index.less';

export default class Quiz extends Component {
  render() {
    return (
      <View className='quiz'>
        <Text className='title'>不确定如何开始</Text>
        <Navigator url='' className='navigator'>
          Take the quiz
        </Navigator>
      </View>
    );
  }
}
