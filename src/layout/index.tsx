import Taro, { Component } from '@tarojs/taro';
import { ScrollView, View } from '@tarojs/components';

import Drawer from '@components/drawer/index';
import Iconfont from '@components/iconfont/index';
import NavList from '@components/nav-list/index';
import NavHeader from '@components/nav-header/index';

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
        <View>
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
        </View>
      </ScrollView>
    );
  }
}