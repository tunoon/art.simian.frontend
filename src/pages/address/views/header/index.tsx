import Taro, { Component } from '@tarojs/taro';
import { View, Text, Navigator } from '@tarojs/components';
import { Iconfont } from '@components';

import './index.less';

export default class Header extends Component {
  render() {
    return (
      <View className='header'>
        <Text className='title'>我的地址</Text>
        <Navigator url='' openType='navigateBack' delta={1} className='return'>
          <View className='icon-wrap'>
            <Iconfont name='expand-more' size={36} color='#2b8df2' />
          </View>
          <Text className='text'>返回我的页面</Text>
        </Navigator>
      </View>
    );
  }
}
