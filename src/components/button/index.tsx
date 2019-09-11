import Taro, { Component } from '@tarojs/taro';
import { Button } from '@tarojs/components';

import './index.less';

type OpenType =
  | 'contact'
  | 'share'
  | 'getUserInfo'
  | 'getPhoneNumber'
  | 'launchApp'
  | 'openSetting'
  | 'feedback'
  | 'getRealnameAuthInfo';
interface IProps {
  color: string;
  width: number;
  openType?: OpenType;
  onUpdateAuth?: any;
}

export default class Btn extends Component<IProps> {
  static defaultProps = {
    color: '#324eca',
    width: 540
  };
  onGetUserInfo(e) {
    const { detail } = e;
    if (Object.keys(detail).length > 1) {
      this.props.onUpdateAuth();
    }
  }
  render() {
    const { width, color, openType } = this.props;

    return (
      <Button
        style={{ width: `${width}rpx`, backgroundColor: color }}
        className='button'
        hoverClass='hover'
        openType={openType}
        onGetUserInfo={this.onGetUserInfo}
      >
        {this.props.children}
      </Button>
    );
  }
}
