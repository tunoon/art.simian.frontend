import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { IAddress } from '../../interface';
import Edit from '../edit/index';

import './index.less';

interface IProps {
  address: IAddress;
  onCreateAddress: any;
  onDeleteAddress: any;
  onUpdateAddress: any;
}

export default class Address extends Component<IProps> {
  state = {
    isOpenEdit: false
  };
  handleToggleOpenEdit() {
    const { isOpenEdit } = this.state;
    this.setState({ isOpenEdit: !isOpenEdit });
  }
  render() {
    const { address } = this.props;
    return (
      <View className='address'>
        {address.isDefault && <Text className='text default'>默认地址</Text>}
        <Text className='text name'>{address.name}</Text>
        <Text className='text region'>{`${address.province} ${address.city} ${address.district}`}</Text>
        <Text className='text detail'>{address.detail}</Text>
        <Text className='text phone'>{address.phone}</Text>
        <View className='handle'>
          <Text className='edit' onClick={this.handleToggleOpenEdit}>
            编辑
          </Text>
          <View className='line'></View>
          <Text
            className='delete'
            onClick={this.props.onDeleteAddress.bind(this, address.id)}
          >
            删除
          </Text>
          <View></View>
        </View>
        {this.state.isOpenEdit && (
          <Edit
            onToggleOpenEdit={this.handleToggleOpenEdit}
            onCreateAddress={this.props.onCreateAddress}
            onUpdateAddress={this.props.onUpdateAddress}
            address={address}
          />
        )}
      </View>
    );
  }
}