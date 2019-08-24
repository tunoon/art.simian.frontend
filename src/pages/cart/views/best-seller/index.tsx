import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components';
import Indicator from '@components/indicator/index';

import './index.less';

interface IProps {
  list: {
    src: string;
    title: string;
    content: string;
    price: string;
  }[];
}

export default class BestSeller extends Component<IProps> {
  static defaultProps = {
    list: [
      {
        src:
          'https://cdn.shopify.com/s/files/1/0951/7126/files/module--empty-cart_luxe-hcb.jpg?1500124',
        title: 'Quality Products',
        content: 'Available in 15 colors',
        price: '$213'
      },
      {
        src:
          '//cdn.shopify.com/s/files/1/0951/7126/files/super-plush-movein-bundle_graphite_silo.jpg?1500124',
        title: 'Super-Plush Move-in Bundle',
        content: 'Available in 4 colors',
        price: '$199'
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
      <View className='best-seller'>
        <View className='header'>Shop our best sellers</View>
        <Swiper className='swiper' onChange={e => this.handleChange(e)}>
          {list.map(item => (
            <SwiperItem key={item.title} className='swiper-item'>
              <Image className='cover' src={item.src} />
              <Text className='title'>{item.title}</Text>
              <Text className='price'>{`From ${item.price} USD`}</Text>
              <Text className='content'>{item.content}</Text>
            </SwiperItem>
          ))}
        </Swiper>
        <View className='indicators'>
          {list.map((item, index) => (
            <Indicator
              key={item.title}
              isActive={this.state.current === index}
            />
          ))}
        </View>
      </View>
    );
  }
}
