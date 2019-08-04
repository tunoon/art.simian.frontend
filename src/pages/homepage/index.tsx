import Taro, { Component, Config } from '@tarojs/taro';
import { ScrollView, View } from '@tarojs/components';
import './index.less';

import SectionCard from './section-card/index';
import Quiz from './quiz/index';
import ValueProp from './value-prop/index';
import HeroCarousel from './hero-carousel/index';
import Iconfont from '../../components/icon/index';

export default class Homepage extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <ScrollView scrollY style={{ height: '100vh' }}>
        <View className='homepage'>
          <HeroCarousel />
          <ValueProp />
          <SectionCard
            src='https://cdn.dynamicyield.com/api/8768435/images/30b424ecb6a9f__sheets_copy_2.jpg'
            title='Shop Sheets'
          />
          <SectionCard
            src='https://cdn.dynamicyield.com/api/8768435/images/1f8d69038960c__shop-bestsellers-mobile.jpg'
            title='Shop Best Sellers'
          />
          <SectionCard
            src='https://cdn.dynamicyield.com/api/8768435/images/232a5d27d1887__blankets_-_mobile.jpg'
            title='Shop Blankets'
          />
          <Quiz />
          <Iconfont name='close' size={16} />
        </View>
      </ScrollView>
    );
  }
}
