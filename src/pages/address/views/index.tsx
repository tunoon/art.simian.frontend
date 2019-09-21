import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { compose, Dispatch } from 'redux';

import Layout from '@layout/index';
import { Btn } from '@components';

import { IAddress } from '../interface';

import Header from './header/index';
import Address from './address/index';
import Edit from './edit/index';
import { load } from '../models/list/actions';
import { edit } from '../models/edit/actions';

import './index.less';

interface IProps {
  list: IAddress[];
  onGetAddressList: any;
  onEditAddress: any;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onGetAddressList: compose(
    dispatch,
    load.start
  ),
  onEditAddress: compose(
    dispatch,
    edit.start
  )
});

const mapStateToProps = state => {
  const list = state.pages.address.list.data;
  return { list };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class AddressList extends Component<IProps> {
  config = {
    navigationBarTitleText: '我的地址'
  };
  state = {
    isOpenEdit: false
  };

  componentDidMount() {
    this.props.onGetAddressList();
  }
  handleToggleOpenEdit() {
    const { isOpenEdit } = this.state;
    this.setState({ isOpenEdit: !isOpenEdit });
  }
  handleEditAddress(address: IAddress) {
    this.props.onEditAddress(address);
  }
  handleDeleteAddress(id: string) {
    if (!id) {
      Taro.showToast({
        title: '地址不存在',
        icon: 'none',
        duration: 2000
      });
    }
    Taro.showModal({
      title: '提示',
      content: '确定删除当前地址吗？',
      confirmColor: '#2b8df2'
    }).then(res => {
      if (res.confirm) {
        console.log(id);
      }
    });
  }
  render() {
    return (
      <Layout>
        <View className='address-list'>
          <Header></Header>
          {this.props.list.map(address => (
            <Address
              address={address}
              key={address.id}
              onEditAddress={this.handleEditAddress}
              onDeleteAddress={this.handleDeleteAddress}
            ></Address>
          ))}
          <View className='button-wrap' onClick={this.handleToggleOpenEdit}>
            <Btn color='#2b8df2' width={480}>
              创建一个新地址
            </Btn>
          </View>
          {this.state.isOpenEdit && (
            <Edit
              onToggleOpenEdit={this.handleToggleOpenEdit}
              onEditAddress={this.handleEditAddress}
            ></Edit>
          )}
        </View>
      </Layout>
    );
  }
}
