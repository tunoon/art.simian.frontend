import Taro, { Component } from '@tarojs/taro';
import { Button } from '@tarojs/components';
import './index.less';

interface IProps {
  color: string;
  width: number;
}

export default class Btn extends Component<IProps> {
  static defaultProps = {
    color: '#324eca',
    width: 540
  };
  render() {
    const { width, color } = this.props;
    return (
      <Button
        style={{ width: `${width}rpx`, backgroundColor: color }}
        className='button'
        hoverClass='hover'
      >
        {this.props.children}
      </Button>
    );
  }
}
