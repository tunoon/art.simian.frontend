import Taro, { Component, Config } from '@tarojs/taro';
import Collections from './collections/index';
import Quiz from './quiz/index';
import ValueProp from './value-prop/index';
import HeroCarousel from './hero-carousel/index';
import PressRibbon from './press-ribbon/index';
import Principles from './principles/index';
import Spotlight from './spotlight/index';
import { Layout } from '@layout';
import './index.less';

export default class Homepage extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  };
  render() {
    return (
      <Layout>
        <HeroCarousel />
        <PressRibbon />
        <ValueProp />
        <Collections />
        <Quiz />
        <Principles />
        <Spotlight />
      </Layout>
    );
  }
}
