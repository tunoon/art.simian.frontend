import Taro, { Component, Config } from '@tarojs/taro';
import { ScrollView, View } from '@tarojs/components';

import Drawer from '@components/drawer/index';
import Iconfont from '@components/iconfont/index';
import NavList from '@components/nav-list/index';
import NavHeader from '@components/nav-header/index';

import Collections from './collections/index';
import Quiz from './quiz/index';
import ValueProp from './value-prop/index';
import HeroCarousel from './hero-carousel/index';
import PressRibbon from './press-ribbon/index';
import Principles from './principles/index';
import Spotlight from './spotlight/index';
import './index.less';

export default class Homepage extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  };

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
        <View className='homepage'>
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
          <HeroCarousel />
          <PressRibbon />
          <ValueProp />
          <Collections />
          <Quiz />
          <Principles />
          <Spotlight />
        </View>
      </ScrollView>
    );
  }
}
