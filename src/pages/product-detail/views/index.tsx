import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import Gallery from './gallery/index';
import * as productDetail from './mock';
import { Layout } from '@layout';

export default class ProductDetail extends Component {
  state = {};

  config = {
    navigationBarTitleText: ''
  };

  render() {
    return (
      <Layout>
        <View className='product-detail'>
          <View className='basic'>
            <Gallery list={productDetail.gallery} />
            <View className='name'>羽绒枕</View>
            <View className='desc'>包含一个羽绒枕头</View>
            <View className='price'>￥199</View>
          </View>
        </View>
      </Layout>
    );
  }
}
