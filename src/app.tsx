import Taro, { Component, Config } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';

import { auth } from '@models/global/auth/actions';
import { login, IParams } from '@models/global/login/actions';

import configStore from './models';
import Index from './pages/index';

import './app.less';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const store = configStore();
class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/my-account/views/index',

      'pages/address/views/index',
      'pages/cart/views/index',
      'pages/homepage/views/index',
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  };

  componentDidMount() {
    Taro.getSetting().then(res => {
      const userInfo: boolean = res.authSetting['scope.userInfo'];
      store.dispatch(auth.start({ userInfo }));
    });
    Taro.checkSession()
      .then(() => {
        store.dispatch(login.init());
      })
      .catch(() => {
        Taro.login().then(res => {
          const { code } = res;
          if (code) {
            Taro.getUserInfo().then(res => {
              const { encryptedData, iv } = res;
              store.dispatch(login.start({ code, encryptedData, iv }));
            });
          }
        });
      });
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
