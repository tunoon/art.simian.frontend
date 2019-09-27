import Taro, { Component } from '@tarojs/taro';
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components';
import list from './data';
import { VButton } from '@components';

import './index.less';

export default class HeroCarousel extends Component {
  state = {
    current: 0
  };
  handleChange(e) {
    this.setState({ current: e.detail.current });
  }
  render() {
    return (
      <View className='hero-carousel'>
        <Swiper
          className='swiper'
          indicatorDots
          autoplay
          circular
          indicatorColor='#ddd'
          indicatorActiveColor='#000'
          onChange={e => this.handleChange(e)}
        >
          {list.map((item, index) => (
            <SwiperItem
              key={item.src}
              className={
                index === this.state.current
                  ? 'text-focus-in swiper-item'
                  : 'text-blur-out swiper-item'
              }
            >
              <Image src={item.src} className='cover' mode='aspectFill' />
              <View className='content'>
                <Text className='title'>{item.title}</Text>
                <Text className='desc'>{item.desc}</Text>
                <VButton>{item.handle}</VButton>
              </View>
              <View />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    );
  }
}
