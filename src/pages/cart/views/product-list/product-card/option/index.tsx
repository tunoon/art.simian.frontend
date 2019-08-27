import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Iconfont from '@components/iconfont/index';

import './index.less';

export interface IOption {
  desc: string;
}

interface IProps {
  list: IOption[];
}

export default class Option extends Component<IProps> {
  state = {
    optionIsOpen: false
  };
  handleToggleOption = () => {
    const { optionIsOpen } = this.state;
    this.setState({ optionIsOpen: !optionIsOpen });
  };
  render() {
    const { list } = this.props;
    return (
      <View>
        {list.length && (
          <View className='options'>
            <View
              className='switch'
              onClick={this.handleToggleOption.bind(this)}
            >
              <Text className='header'>Item details</Text>
              <Iconfont name='caret-down' size={24} />
            </View>
            {this.state.optionIsOpen &&
              list.map(item => (
                <View className='detail' key={item.desc}>
                  <View className='dot' />
                  <Text className='desc'>{item.desc}</Text>
                </View>
              ))}
          </View>
        )}
      </View>
    );
  }
}
