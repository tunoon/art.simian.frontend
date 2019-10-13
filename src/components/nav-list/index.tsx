import Taro, { Component } from '@tarojs/taro';
import { path } from '@common/helpers';
import NavItem from './nav-item';

interface IProps {
  list: {
    name: string;
    url: string;
  }[];
}

export default class NavList extends Component<IProps> {
  static defaultProps = {
    list: [
      { name: 'Get started', url: '' },
      { name: 'Best sellers', url: '' },
      { name: 'Sheets', url: '' },
      { name: 'Towels', url: '' },
      { name: 'Loungewear', url: '' },
      { name: 'Comforters', url: '' },
      { name: 'Pillows', url: '' },
      { name: 'Brooklittles', url: '' },
      { name: 'Blankets', url: '' },
      { name: 'Accessories', url: '' },
      { name: 'Last Call', url: '' },
      { name: 'About', url: '' },
      { name: 'My Account', url: path.myAccount },
      { name: 'Search', url: '' }
    ]
  };
  render() {
    return this.props.list.map(item => (
      <NavItem key={item.name} url={item.url}>
        {item.name}
      </NavItem>
    ));
  }
}
