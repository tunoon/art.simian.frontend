import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Btn from '@components/button';

import './index.less';

export default class ValueProp extends Component {
  render() {
    return (
      <View className='value-prop'>
        <Text>Hi, We are Art.Simian!</Text>
        <Text>
          We are your new best friend when it comes to finding high quality
          sheets and towels at a price that won’t keep you up at night. How do
          we do it? By cutting out the middleman and passing the savings to you.
        </Text>
        <View style={{marginTop: '48px'}}>
          <Btn>Find out more</Btn>
        </View>
      </View>
    );
  }
}
