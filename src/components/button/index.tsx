import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';

interface IProps {
  color: string;
  width: number;
}

export default class Button extends Component<IProps> {
  static defaultProps = {
    color: '#324eca',
    width: 540
  };
  render() {
    const { width, color } = this.props;
    return (
      <View
        style={{ width: `${width}rpx`, backgroundColor: color }}
        className='button'
      >
        {this.props.children}
      </View>
    );
  }
}
