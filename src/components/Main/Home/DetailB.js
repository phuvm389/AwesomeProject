import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class DetailB extends Component {
  // const { nid } = this.props.navigation.state.params;

  // console.log('------Slider Detail------');
  // console.log(nid);
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F8F7F9'}}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Back"
        />
        <Text style={{fontSize: 24}}>Welcome to Detail B!</Text>
      </View>
    );
  }
}
