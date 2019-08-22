import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import ProductCard, { IProps as IProduct } from './product-card/index';

import './index.less';

interface IProps {
  list: IProduct[];
}

export default class ProductList extends Component<IProps> {
  static defaultProps = {
    list: [
      {
        title: 'Laundress Signature Detergent',
        images: [
          {
            src:
              '//cdn.shopify.com/s/files/1/0951/7126/products/laundress_signature-conditioner_silo_medium.jpg?v=1544471050'
          }
        ],
        price: ' $20.00 USD',
        options: [
          { desc: 'Classic Hardcore Bundle, Cali King, Graphite' },
          { desc: 'Comforter, Full/Queen, All-Season, Down Alternative' },
          { desc: 'Pillow, Firm, Standard, Down Alternative' },
          { desc: 'Complimentary Laundress Detergent, 32 oz.' }
        ]
      },
      {
        title: 'Down Comforter',
        images: [
          {
            src:
              '//cdn.shopify.com/s/files/1/0951/7126/products/down_lightweight_silo_medium.jpg?v=1558017459'
          }
        ],
        price: ' $349.00 USD'
      },
      {
        title: 'Luxe Starter Sheet Set',
        images: [
          {
            src:
              '//cdn.shopify.com/s/files/1/0951/7126/products/luxe_windowpane_fitted-sheet_silo_medium.jpg?v=1551983660'
          },
          {
            src:
              '//cdn.shopify.com/s/files/1/0951/7126/products/luxe_graphite-steel-oxford-stripe_pillow_silo_medium.jpg?v=1564501486'
          }
        ],
        price: ' $108.00 USD'
      },
      {
        title: 'Classic Move-In Bundle',
        images: [
          {
            src:
              '//cdn.shopify.com/s/files/1/0951/7126/products/classic_graphite_hardcore-bundle_silo_64303bfb-85cf-4c3f-9ab2-50e8f6008ffa_medium.jpg?v=1551896072'
          },
          {
            src:
              '//cdn.shopify.com/s/files/1/0951/7126/products/down_all-season_silo_1200_medium.jpg?v=1558017474'
          },
          {
            src:
              '//cdn.shopify.com/s/files/1/0951/7126/products/down_firm-pillow-insert_silo_651b68f1-962b-4870-8592-eca12d69b8ed_medium.jpg?v=1545432689'
          },
          {
            src:
              '//cdn.shopify.com/s/files/1/0951/7126/products/laundress_signature-detergent_silo_1200_medium.gif?v=1560201130'
          }
        ],
        price: ' $580.17 USD',
        ship: 'Your item is backordered and will ship by 08/30/2019',
        options: [
          { desc: 'Classic Hardcore Bundle, Cali King, Graphite' },
          { desc: 'Comforter, Full/Queen, All-Season, Down Alternative' },
          { desc: 'Pillow, Firm, Standard, Down Alternative' },
          { desc: 'Complimentary Laundress Detergent, 32 oz.' }
        ]
      }
    ]
  };
  render() {
    const { list } = this.props;
    return (
      <View className='product-list'>
        {list.map(item => (
          <ProductCard
            key={item.title}
            title={item.title}
            images={item.images}
            price={item.price}
            ship={item.ship}
            options={item.options}
          />
        ))}
      </View>
    );
  }
}
