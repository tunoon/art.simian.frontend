import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

import './index.less';

export interface IImage {
  src: string;
}

 interface IProps {
  list: IImage[];
}

export default class Gallery extends Component<IProps> {
  render() {
    const { list } = this.props;
    return (
      <View className='gallery'>
        {list.map(item => (
          <Image className='image' key={item.src} src={item.src} />
        ))}
      </View>
    );
  }
}
