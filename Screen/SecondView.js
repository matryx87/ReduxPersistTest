import React, { Component } from "react";
import { View, Text, Picker, DatePickerIOS, Button } from "react-native";

export default class SecondView extends Component {
  //______________________________________
  // MARK - DatePickerIOS
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  //______________________________________

  static navigationOptions = {
    title: "Second View"
  };

  state = {
    language: null
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text>SecondView Screen</Text>
        </View>

        <Button
          title="Go to MapView"
          onPress={() => this.props.navigation.navigate("MapView")}
        />

        <DatePickerIOS
          mode="date" //date, time, datetime
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
        <View style={{ flex: 1, alignItems: "center" }}>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 300 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
      </View>
    );
  }
}
