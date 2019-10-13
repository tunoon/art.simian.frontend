import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import { CommonEvent } from '@tarojs/components/types/common';
import { Indicator } from '@components';

import './index.less';

interface IProps {
  list: {
    src: string;
  }[];
}

export default class Gallery extends Component<IProps> {
  static defaultProps = {
    list: []
  };
  state = {
    current: 0
  };
  handleChange(e: CommonEvent) {
    this.setState({ current: e.detail.current });
  }
  render() {
    const { list } = this.props;
    return (
      <View className='gallery'>
        <Swiper
          className='swiper'
          onChange={e => this.handleChange(e)}
          circular
        >
          {list.map(item => (
            <SwiperItem key={item.src} className='swiper-item'>
              <Image className='cover' src={item.src} />
            </SwiperItem>
          ))}
        </Swiper>
        <View className='indicators'>
          {list.map((item, index) => (
            <Indicator key={item.src} isActive={this.state.current === index} />
          ))}
        </View>
      </View>
    );
  }
}
