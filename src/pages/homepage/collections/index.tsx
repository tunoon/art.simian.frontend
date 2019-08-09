import Taro, { Component } from '@tarojs/taro';
import Collection from './collection/index';

interface IProps {
  list: {
    src: string;
    title: string;
  }[];
}

export default class Collections extends Component<IProps> {
  static defaultProps = {
    list: [
      {
        src:
          'https://cdn.dynamicyield.com/api/8768435/images/30b424ecb6a9f__sheets_copy_2.jpg',
        title: 'Shop Sheets'
      },
      {
        src:
          'https://cdn.dynamicyield.com/api/8768435/images/1f8d69038960c__shop-bestsellers-mobile.jpg',
        title: 'Shop Best Sellers'
      },
      {
        src:
          'https://cdn.dynamicyield.com/api/8768435/images/232a5d27d1887__blankets_-_mobile.jpg',
        title: 'Shop Blankets'
      }
    ]
  };
  render() {
    return this.props.list.map(item => (
      <Collection src={item.src} title={item.title} key={item.src} />
    ));
  }
}
