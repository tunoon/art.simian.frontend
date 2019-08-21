import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components';
import Layout from '@layout/index';

import Empty from './empty/index';
import BestSeller from './best-seller/index';
import Subtotal from './subtotal/index';
import './index.less';

export default class Cart extends Component {
  config: Config = {
    navigationBarTitleText: '购物车'
  };
  render() {
    return (
      <Layout>
        <View className='cart'>
          <View className='empty' style={{ display: 'none' }}>
            <Empty />
            <BestSeller />
          </View>
          <View className='subtotal'>
            <Subtotal />
          </View>
        </View>
      </Layout>
    );
  }
}