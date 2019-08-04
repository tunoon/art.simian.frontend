import Taro, { Component } from '@tarojs/taro';
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components';
import Btn from '@components/button';

import list from './data';
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
                index === this.state.current ? 'text-focus-in' : 'text-blur-out'
              }
            >
              <Image src={item.src} className='cover' mode='aspectFill' />
              <View className='content'>
                <Text>{item.title}</Text>
                <Text>{item.desc}</Text>
                <Btn>{item.handle}</Btn>
              </View>
              <View />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    );
  }
}
