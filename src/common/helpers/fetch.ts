import Taro from '@tarojs/taro';

const domain = '';

interface IConfig {
  header?: {};
  RESTful?: string;
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
  success: any;
  fail: any;
  complete: any;
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

  get = (url: string, config: IConfig = { header: {}, RESTful: '' }) => {
    const { header = {}, RESTful = {} } = config;
    url = `${url}/${RESTful}`;
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

  delete = (url: string, config: IConfig = { header: {}, RESTful: '' }) => {
    const { header = {}, RESTful = '' } = config;
    url = `${url}/${RESTful}`;
    return this.request('DELETE', url, header);
  };

  put = (
    url: string,
    config: IConfig = {
      header: {},
      RESTful: '',
      data: {}
    }
  ) => {
    const { header = {}, RESTful = '', data } = config;
    url = `${url}/${RESTful}`;
    return this.request('POST', url, header, data);
  };

  request(method: Method, url: string, header: {}, data?: {}) {
    return new Promise((resolve, reject) => {
      const options: IOptions = {
        method,
        url: `${domain}${url}`,
        header: { ...this.config.header, header },
        data,
        success: ({ statusCode, data }) => {
          if (statusCode < 400 && statusCode >= 200) {
            resolve(data);
          } else {
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