import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components';
import { Indicator } from '@components';
import './index.less';

interface IProps {
  list: {
    src: string;
    title: string;
    content: string;
  }[];
}

export default class Principles extends Component<IProps> {
  static defaultProps = {
    list: [
      {
        src:
          'https://cdn.shopify.com/s/files/1/0951/7126/files/module-homepage--principles-quality_200x.png?1488752',
        title: 'Quality Products',
        content: 'We use only the very best materials and manufacturers.'
      },
      {
        src:
          'https://cdn.shopify.com/s/files/1/0951/7126/files/module-homepage--principles-warranty_200x.png?1488752',
        title: 'Lifetime Warranty',
        content: 'If our product rips or frays, we’ll make it right.'
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
      <View className='principles'>
        <View className='title'>Your comfort is our #1 priority</View>
        <Swiper className='swiper' onChange={e => this.handleChange(e)}>
          {list.map(item => (
            <SwiperItem key={item.title} className='swiper-item'>
              <Image className='cover' src={item.src} />
              <Text className='title'>{item.title}</Text>
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
