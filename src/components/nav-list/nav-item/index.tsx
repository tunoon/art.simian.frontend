import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';

export default class NavItem extends Component {
  render() {
    return <View className='nav-item'>{this.props.children}</View>;
  }
}
