import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

interface IProps {
  isActive: boolean;
}

export default class Indicator extends Component<IProps> {
  render() {
    return (
      <View
        style={this.props.isActive ? 'opacity: 1' : 'opacity: 0.25'}
        className='indicator'
      />
    );
  }
}
