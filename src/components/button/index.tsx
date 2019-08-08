import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';

export default class Button extends Component {
  render() {
    return <View className='button'>{this.props.children}</View>;
  }
}
