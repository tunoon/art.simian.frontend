import Taro, { Component } from '@tarojs/taro';
import NavItem from './nav-item';

interface IProps {
  list: string[];
}

export default class NavList extends Component<IProps> {
  static defaultProps = {
    list: [
      'Get started',
      'Best sellers',
      'Sheets',
      'Towels',
      'Loungewear',
      'Comforters',
      'Pillows',
      'Brooklittles',
      'Blankets',
      'Accessories',
      'Last Call',
      'About',
      'My Account',
      'Search'
    ]
  };
  render() {
    return this.props.list.map(item => <NavItem key={item}>{item}</NavItem>);
  }
}
