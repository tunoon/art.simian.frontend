import Taro, { Component } from '@tarojs/taro';
import { View, Text, Navigator } from '@tarojs/components';
import { Btn, Iconfont } from '@components';

import './index.less';

interface IProps {
  onToggleOpenAddress: () => void;
}

export default class Header extends Component<IProps> {
  static defaultProps = {
    onToggleOpenAddress: () => {}
  };
  render() {
    return (
      <View className='header'>
        <View className='title-wrap'>
          <Text className='title'>我的地址</Text>
          <Navigator
            url=''
            openType='navigateBack'
            delta={1}
            className='return'
          >
            <View className='icon-wrap'>
              <Iconfont name='expand-more' size={36} color='#2b8df2'></Iconfont>
            </View>
            <Text className='text'>返回我的页面</Text>
          </Navigator>
        </View>
        <View className='button-wrap' onClick={this.props.onToggleOpenAddress}>
          <Btn color='#2b8df2' width={480}>
            添加地址
          </Btn>
        </View>
      </View>
    );
  }
}
