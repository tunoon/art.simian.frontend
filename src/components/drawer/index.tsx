import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView } from '@tarojs/components';
import Nav from '../nav/index';
import NavItem from '../nav-item/index'
import './index.less';

export default class Drawer extends Component {
  render() {
    return (
      <ScrollView scrollY style={{ height: '100vh' }}>
        <View className='drawer'>
          <Nav />
          <NavItem></NavItem>
        </View>
      </ScrollView>
    );
  }
}
