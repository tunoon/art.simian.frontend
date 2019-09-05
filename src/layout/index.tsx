import Taro, { Component } from '@tarojs/taro';
import { ScrollView } from '@tarojs/components';

import { Iconfont, NavList, NavHeader, Drawer } from '@components';

export default class Layout extends Component {
  state = {
    drawerStatus: ''
  };

  handleToggleDrawer = (name: string) => {
    if (name === 'more') {
      return this.setState({ drawerStatus: 'visible' });
    }
    if (name === 'close') {
      return this.setState({ drawerStatus: 'hidden' });
    }
  };
  render() {
    return (
      <ScrollView scrollY style={{ height: '100vh' }}>
        <Drawer status={this.state.drawerStatus}>
          <NavHeader>
            <Iconfont name='cart' />
            <Iconfont name='close' onToggleDrawer={this.handleToggleDrawer} />
          </NavHeader>
          <NavList />
        </Drawer>
        <NavHeader>
          <Iconfont name='cart' />
          <Iconfont name='more' onToggleDrawer={this.handleToggleDrawer} />
        </NavHeader>
        {this.props.children}
      </ScrollView>
    );
  }
}
