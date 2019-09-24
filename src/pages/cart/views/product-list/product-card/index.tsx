import Taro, { Component } from '@tarojs/taro';
import { View, Text, Input } from '@tarojs/components';
import Iconfont from '@components/iconfont/index';
import Gallery, { IImage } from './gallery/index';
import Option, { IOption } from './option/index';
import './index.less';

export interface IProps {
  title: string;
  price: string;
  images: IImage[];
  ship?: string;
  options: IOption[];
}

export default class ProductCard extends Component<IProps> {
  render() {
    const { title, price, images, ship, options = [] } = this.props;
    return (
      <View className='product-card'>
        <View className='product'>
          <View className='title-wrap'>
            <Text className='title'>{title}</Text>
            <Text className='price'>{price}</Text>
          </View>
          {ship && <View className='ship'>{ship}</View>}
          <Gallery list={images} />
          <Option list={options} />
        </View>
        <View className='quality'>
          <Input className='input' />
          <Iconfont name='delete' color='#bababa' />
        </View>
      </View>
    );
  }
}
