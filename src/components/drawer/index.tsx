import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView } from '@tarojs/components';
import './index.less';

interface IProps {
  status: string;
}

export default class Drawer extends Component<IProps> {
  render() {
    return (
      <View>
        {this.props.status && (
          <ScrollView scrollY className={`${this.props.status} drawer`}>
            <View>{this.props.children}</View>
          </ScrollView>
        )}
        {this.props.status === 'visible' && <View className='shade' />}
      </View>
    );
  }
}
