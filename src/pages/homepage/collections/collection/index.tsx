import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './index.less';

export interface IProps {
  src: string;
  title: string;
}

export default class Collection extends Component<IProps> {
  render() {
    const { src, title } = this.props;
    return (
      <View className='collection'>
        <Image src={src} className='cover' />
        <View className='title'>{title}</View>
      </View>
    );
  }
}
