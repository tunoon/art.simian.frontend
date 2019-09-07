import Taro, { Component } from '@tarojs/taro';
import { Button } from '@tarojs/components';

import { connect } from '@tarojs/redux';
import { compose, Dispatch } from 'redux';

import * as actions from '@models/global/auth-setting/actions';

import './index.less';

type openType =
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
  openType?: openType;
  updateAuthSetting?: any;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateAuthSetting: compose(
    dispatch,
    actions.authSetting.start
  )
});

@connect(mapDispatchToProps)
export default class Btn extends Component<IProps> {

  static defaultProps = {
    color: '#324eca',
    width: 540,
  };
  onGetUserInfo(e) {
    console.log(e);
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
