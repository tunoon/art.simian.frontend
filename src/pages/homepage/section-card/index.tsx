import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './index.less';

interface IProps {
  src: string;
  title: string;
}

export default class SectionCard extends Component<IProps> {
  render() {
    const { src, title } = this.props;
    return (
      <View className='section-card'>
        <Image src={src} />
        <View>{title}</View>
      </View>
    );
  }
}
