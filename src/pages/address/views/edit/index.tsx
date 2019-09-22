import Taro, { Component } from '@tarojs/taro';
import { View, Text, Input, Picker, Button, Form } from '@tarojs/components';
import { Iconfont } from '@components';
import './index.less';

import { IAddress } from '../../interface';

type Region = [string, string, string];

interface IRegion {
  detail: {
    value: {
      detail: string;
      name: string;
      phone: string;
      region: Region;
    };
  };
}

interface IProps {
  address: IAddress;
  onToggleOpenEdit: any;
  onCreateAddress: any;
  onUpdateAddress?: any;
}

export default class Edit extends Component<IProps> {
  state = {
    region: ['', '', ''],
    isDefault: false
  };
  static defaultProps = {
    address: {
      name: '',
      province: '',
      city: '',
      district: '',
      detail: '',
      phone: '',
      isDefault: false
    },
    onToggleOpenEdit: () => {},
    onCreateAddress: () => {}
  };

  componentDidMount() {
    const {
      address: { province, city, district }
    } = this.props;
    this.setState({ region: [province, city, district] });
  }

  handleChangeRegion = (e: { detail: { value: Region } }) => {
    this.setState({
      region: e.detail.value
    });
  };

  handleToggleDefault = () => {
    const { isDefault } = this.state;
    this.setState({ isDefault: !isDefault });
  };
  handleSubmit = (e: IRegion) => {
    const { isDefault, region } = this.state;
    const { id: addressId } = this.props.address;

    const { name, phone, detail } = e.detail.value;
    const [province, city, district] = region;
    let address: IAddress = {
      name,
      phone,
      detail,
      province,
      city,
      district,
      isDefault
    };

    for (const key in address) {
      if (address.hasOwnProperty(key)) {
        let value = address[key];
        if (typeof value === 'boolean') {
          value = value.toString();
        }
        if (!value) {
          Taro.showToast({
            title: '请将信息填写完整',
            icon: 'none',
            duration: 2000
          });
          return;
        }
      }
    }

    if (addressId) {
      address.id = addressId;
      this.props.onUpdateAddress(address);
    } else {
      this.props.onCreateAddress(address);
    }
  };

  render() {
    const {
      address: { name, detail, phone, isDefault, id }
    } = this.props;
    const { region } = this.state;
    return (
      <View className='edit'>
        <Form onSubmit={this.handleSubmit}>
          <Text className='title'>添加新地址</Text>
          <View className='input-wrap'>
            <Text className='label'>收货人</Text>
            <Input className='input' value={name} name='name'></Input>
          </View>
          <View className='input-wrap'>
            <Text className='label'>手机号码</Text>
            <Input className='input' value={phone} name='phone'></Input>
          </View>
          <Picker
            mode='region'
            value={region}
            name='region'
            onChange={this.handleChangeRegion}
          >
            <View className='input-wrap'>
              <Text className='label'>所在地区</Text>
              <View className='input area'>{`${region[0]} ${region[1]} ${region[2]}`}</View>
            </View>
          </Picker>
          <View className='input-wrap'>
            <Text className='label'>详细地址</Text>
            <Input className='input' value={detail} name='detail'></Input>
          </View>
          <View className='is-default' onClick={this.handleToggleDefault}>
            <Text className='text'>设为默认</Text>
            <Iconfont
              name='check-circle-o'
              size={36}
              color={isDefault ? '#2b8df2' : '#e5e5e5'}
            ></Iconfont>
          </View>
          <View className='complete'>
            <Button className='button' hoverClass='hover' formType='submit'>
              {!!id ? '更新地址' : '创建地址'}
            </Button>
            <Text className='cancel' onClick={this.props.onToggleOpenEdit}>
              取消
            </Text>
          </View>
        </Form>
      </View>
    );
  }
}
