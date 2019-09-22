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
import { create } from '../models/create/actions';
import { update } from '../models/update/actions';
import { omit } from '../models/omit/actions';

import './index.less';

interface IProps {
  list: IAddress[];
  onGetAddressList: any;
  onCreateAddress: any;
  onUpdateAddress: any;
  onDeleteAddress: any;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onGetAddressList: compose(
    dispatch,
    load.start
  ),
  onCreateAddress: compose(
    dispatch,
    create.start
  ),
  onUpdateAddress: compose(
    dispatch,
    update.start
  ),
  onDeleteAddress: compose(
    dispatch,
    omit.start
  )
});

const mapStateToProps = state => {
  const list = state.pages.address.list;
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
  handleCreateAddress(address: IAddress) {
    this.props.onCreateAddress(address);
  }
  handleUpdateAddress(address: IAddress) {
    this.props.onUpdateAddress(address);
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
        this.props.onDeleteAddress({ id });
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
              onCreateAddress={this.handleCreateAddress}
              onUpdateAddress={this.handleUpdateAddress}
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
              onCreateAddress={this.handleCreateAddress}
            ></Edit>
          )}
        </View>
      </Layout>
    );
  }
}
