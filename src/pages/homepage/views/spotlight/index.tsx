import Taro, { Component } from '@tarojs/taro';
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components';
import { Indicator, VButton } from '@components';

import './index.less';

interface IProps {
  list: {
    src: string;
    name: string;
    desc: string;
    price: string;
  }[];
}

export default class Spotlight extends Component<IProps> {
  static defaultProps = {
    list: [
      {
        src:
          'https://cdn.shopify.com/s/files/1/0951/7126/products/luxe_solid-white_core-sheet-set_silo.jpg?v=1564501709',
        name: 'Luxe Core Sheet Set',
        price: '$129.00',
        desc: 'Includes 1 Flat Sheet, 1 Fitted Sheet, and 2 Pillowcases.'
      }
    ]
  };
  state = {
    current: 0
  };
  handleChange(e) {
    this.setState({ current: e.detail.current });
  }
  render() {
    const { list } = this.props;
    return (
      <View className='spotlight'>
        <Text className='title'>Featured Products</Text>
        <Text className='caption'>
          Products we love - and we are sure you will, too
        </Text>
        <Swiper className='swiper' onChange={e => this.handleChange(e)}>
          {list.map(item => (
            <SwiperItem key={item.name} className='swiper-item'>
              <Image className='cover' src={item.src} />
              <Text className='name'>{item.name}</Text>
              <Text className='price'>Form {item.price}</Text>
              <Text className='desc'>{item.desc}</Text>
              <View style={{ marginTop: '40rpx' }}>
                <VButton width={630} color='#293c70'>
                  Shop Now
                </VButton>
              </View>
            </SwiperItem>
          ))}
        </Swiper>
        <View className='indicators'>
          {list.map((item, index) => (
            <Indicator
              key={item.name}
              isActive={this.state.current === index}
            />
          ))}
        </View>
      </View>
    );
  }
}
