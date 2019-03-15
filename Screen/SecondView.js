import React, { Component } from "react";
import { View, Text } from "react-native";

export default class SecondView extends Component {
  static navigationOptions = {
    title: "Second View"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>SecondView Screen</Text>
      </View>
    );
  }
}
