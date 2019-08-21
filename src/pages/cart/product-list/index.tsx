import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import ProductCard from './product-card/index';

import './index.less';

export default class ProductList extends Component {
  render() {
    return (
      <View className='product-list'>
        <ProductCard
          title='Laundress Signature Detergent'
          src='//cdn.shopify.com/s/files/1/0951/7126/products/laundress_signature-conditioner_silo_medium.jpg?v=1544471050'
          price=' $20.00 USD'
        />
        <ProductCard
          title='Laundress Signature Detergent'
          src='//cdn.shopify.com/s/files/1/0951/7126/products/laundress_signature-conditioner_silo_medium.jpg?v=1544471050'
          price=' $20.00 USD'
        />
      </View>
    );
  }
}
