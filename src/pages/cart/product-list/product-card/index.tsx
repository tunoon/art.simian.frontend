import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image, Input } from '@tarojs/components';

import Iconfont from '@components/iconfont/index';

import './index.less';

interface IProps {
  title: string;
  price: string;
  src: string;
}

export default class ProductCard extends Component<IProps> {
  render() {
    const { title, price, src } = this.props;

    return (
      <View className='product-card'>
        <View className='product'>
          <View className='title-wrap'>
            <Text className='title'>{title}</Text>
            <Text className='price'>{price}</Text>
          </View>
          <Image className='image' src={src} />
          <View className='options'>
            <View className='switch'></View>
            <View className='detail'></View>
          </View>
        </View>
        <View className='quality'>
          <Input className='input' />
          <Iconfont name='delete' color='#bababa' />
        </View>
      </View>
    );
  }
}
