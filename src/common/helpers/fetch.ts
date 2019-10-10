import Taro from '@tarojs/taro';
import { HttpStatus } from './http-status.enum';

const domain = 'http://localhost:3000';

const setAuthorization = () => {
  try {
    const value = Taro.getStorageSync('[global.login]');
    if (value) {
      return `Bearer ${value.token}`;
    }
  } catch (e) {
    console.log(e);
    // Do something when catch error
  }
};

interface IConfig {
  header?: {};
  data?: {};
}

type Method =
  | 'OPTIONS'
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'TRACE'
  | 'CONNECT'
  | undefined;

interface IOptions {
  url: string;
  data?: {};
  header?: {};
  method: Method;
  success: ({ statusCode, data }: { statusCode: number; data: object }) => void;
  fail: ({
    statusCode,
    errMsg: string
  }: {
    statusCode: number;
    errMsg: string;
  }) => void;
  complete: () => void;
}

export class Fetch {
  data: {};
  host: string;
  config: {
    header: {};
  };
  constructor() {
    this.host = '';
    this.config = {
      header: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept-Language': 'zh-CN,zh;q=0.8'
      }
    };
  }

  get = (url: string, config: IConfig = { header: {} }) => {
    const { header = {} } = config;
    return this.request('GET', url, header);
  };

  post = (
    url: string,
    config: IConfig = {
      header: {},
      data: {}
    }
  ) => {
    const { header = {}, data } = config;
    return this.request('POST', url, header, data);
  };

  delete = (url: string, config: IConfig = { header: {} }) => {
    const { header = {} } = config;
    return this.request('DELETE', url, header);
  };

  put = (
    url: string,
    config: IConfig = {
      header: {},
      data: {}
    }
  ) => {
    const { header = {}, data } = config;
    return this.request('PUT', url, header, data);
  };

  private request(method: Method, url: string, header: {}, data?: {}) {
    return new Promise((resolve, reject) => {
      const options: IOptions = {
        method,
        url: `${domain}/${url}`,
        header: {
          ...this.config.header,
          Authorization: setAuthorization(),
          header
        },
        data,
        success: ({ statusCode, data }) => {
          if (statusCode < 400 && statusCode >= 200) {
            resolve(data);
          } else {
            if (statusCode === HttpStatus.FORBIDDEN) {
              Taro.setStorageSync('[global.login]', {
                isLogined: false,
                token: ''
              });
              console.log('need login');
            }
            reject({
              code: statusCode,
              message: data
            });
          }
        },
        fail: ({
          statusCode,
          errMsg
        }: {
          statusCode: number;
          errMsg: string;
        }) => {
          reject({
            code: statusCode,
            message: errMsg
          });
        },
        complete: () => {}
      };
      return Taro.request(options);
    });
  }
}
