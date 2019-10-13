import Taro, { Component } from '@tarojs/taro';
import { Navigator } from '@tarojs/components';
import './index.less';

interface IProps {
  url: string;
}
export default class NavItem extends Component<IProps> {
  render() {
    return (
      <Navigator url={this.props.url} hoverClass='hover' className='nav-item'>
        {this.props.children}
      </Navigator>
    );
  }
}
