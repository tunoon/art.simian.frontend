import Taro, { Component } from '@tarojs/taro';
import { View, Text, Input, Picker } from '@tarojs/components';
import { Btn, Iconfont } from '@components';

import './index.less';

interface IRegion {
  detail: {
    value: [string, string, string];
  };
}

export default class Edit extends Component {
  state = {
    region: ['', '', ''],
    isDefaultAddress: false
  };
  handleChangeRegion = (e: IRegion) => {
    this.setState({
      region: e.detail.value
    });
  };
  handleToggleDefaultAddress = () => {
    const { isDefaultAddress } = this.state;
    this.setState({ isDefaultAddress: !isDefaultAddress });
  };
  render() {
    const { region, isDefaultAddress } = this.state;
    return (
      <View className='edit'>
        <Text className='title'>添加新地址</Text>
        <View className='input-wrap'>
          <Text className='label'>收货人</Text>
          <Input className='input'></Input>
        </View>
        <View className='input-wrap'>
          <Text className='label'>手机号码</Text>
          <Input className='input'></Input>
        </View>
        <Picker mode='region' value={region} onChange={this.handleChangeRegion}>
          <View className='input-wrap'>
            <Text className='label'>所在地区</Text>
            <View className='input'>
              {`${region[0]} ${region[1]} ${region[2]}`}
            </View>
          </View>
        </Picker>
        <View className='input-wrap'>
          <Text className='label'>详细地址</Text>
          <Input className='input'></Input>
        </View>
        <View className='is-default' onClick={this.handleToggleDefaultAddress}>
          <Text className='text'>设为默认地址</Text>
          <Iconfont
            name='check-circle-o'
            size={36}
            color={isDefaultAddress ? '#2b8df2' : '#e5e5e5'}
          ></Iconfont>
        </View>
        <View className='complete'>
          <Btn width={360} color='#2b8df2'>
            添加
          </Btn>
          <Text className='cancel'>取消</Text>
        </View>
      </View>
    );
  }
}
