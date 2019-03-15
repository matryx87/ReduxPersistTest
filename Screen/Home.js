import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>

        <Button
          title="Go to SecondView"
          onPress={() => this.props.navigation.navigate("SecondView")} // Torna alla Home (o a qualsiasi altro screen dello stack)
        />
      </View>
    );
  }
}
