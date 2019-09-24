import Taro, { Component } from '@tarojs/taro';
import { View, Text, Swiper, SwiperItem } from '@tarojs/components';
import { Iconfont } from '@components';

import './index.less';

export default class PressRibbon extends Component {
  render() {
    return (
      <View className='press-ribbon'>
        <Swiper className='swiper'>
          <SwiperItem className='swiper-item'>
            <Text className='title'>2018 Best Duvet Cover</Text>
            <Text className='title bold'>Wirecutter</Text>
          </SwiperItem>
        </Swiper>
        <View className='arrow previous'>
          <Iconfont name='arrow-left' color='#333' />
        </View>
        <View className='arrow next'>
          <Iconfont name='arrow-right' color='#333' />
        </View>
      </View>
    );
  }
}
