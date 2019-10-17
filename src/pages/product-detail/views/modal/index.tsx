import Taro, { PureComponent } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Iconfont } from '@components';

export default class Modal extends PureComponent {
  state = {};

  render() {
    return (
      <View className='modal'>
        <View className='shade' />
        <View className='detail'>
          <View className='switch'>
            <Iconfont name='close' color='#bababa' />
          </View>
          <View className='content'>{this.props.children}</View>
        </View>
      </View>
    );
  }
}
