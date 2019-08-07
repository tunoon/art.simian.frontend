import Taro, { Component, Config } from '@tarojs/taro';
import { ScrollView, View } from '@tarojs/components';
import './index.less';


import Drawer from '../../components/drawer/index';
import Iconfont from '../../components/iconfont/index';
import Nav from '../../components/nav/index';
import NavItem from '../../components/nav-item/index';

import SectionCard from './section-card/index';
import Quiz from './quiz/index';
import ValueProp from './value-prop/index';
import HeroCarousel from './hero-carousel/index';
import PressRibbon from "./press-ribbon/index";

const sectionData = [
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
];
const navItems = [
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
];
export default class Homepage extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  };

  state = {
    drawerStatus: ''
  };

  handleToggleDrawer = (e: string) => {
    if (e === 'more') {
      return this.setState({ drawerStatus: 'visible' });
    }
    if (e === 'close') {
      return this.setState({ drawerStatus: 'hidden' });
    }
  };
  render() {
    return (
      <ScrollView scrollY style={{ height: '100vh' }}>
        <View className='homepage'>
          <Nav>
            <Iconfont name='cart' size={24} />
            <Iconfont
              name='more'
              size={24}
              onToggleDrawer={this.handleToggleDrawer}
            />
          </Nav>
          <HeroCarousel />
          <PressRibbon></PressRibbon>
          <ValueProp />
          {sectionData.map(item => (
            <SectionCard src={item.src} title={item.title} key={item.src} />
          ))}
          <Quiz />
          <Drawer status={this.state.drawerStatus}>
            <Nav>
              <Iconfont name='cart' size={24} />
              <Iconfont
                name='close'
                size={24}
                onToggleDrawer={this.handleToggleDrawer}
              />
            </Nav>
            {navItems.map(item => (
              <NavItem key={item}>{item}</NavItem>
            ))}
          </Drawer>
        </View>
      </ScrollView>
    );
  }
}
