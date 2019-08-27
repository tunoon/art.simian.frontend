import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';

interface IProps {
  name: string;
  size: number;
  color: string;
  onToggleDrawer: Function;
}

export default class Iconfont extends Component<IProps> {
  static defaultProps = {
    color: '#324eca',
    size: 48,
    onToggleDrawer: () => {}
  };
  render() {
    const { name, size, onToggleDrawer, color } = this.props;
    return (
      <View
        className={`icon icon-${name}`}
        style={{ fontSize: `${size}rpx`, color }}
        onClick={onToggleDrawer.bind(this, name)}
      />
    );
  }
}
