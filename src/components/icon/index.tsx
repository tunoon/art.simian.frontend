import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';
import './assets/iconfont/style.css';

interface IProps {
  name: string;
  size: number;
}

export default class Icon extends Component<IProps> {
  render() {
    const { name, size } = this.props;
    return (
      <View
        className={`icon icon-${name}`}
        style={{ width: `${size}px`, height: `${size}px`, color: 'red' }}
      />
    );
  }
}
