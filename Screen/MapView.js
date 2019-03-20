import React, { Component } from "react";
import { View, Text } from "react-native";

export default class SecondView extends Component {
  static navigationOptions = {
    title: "Map View"
  };

  state = {};

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>MapView Screen</Text>
      </View>
    );
  }
}
