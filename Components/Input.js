import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

export default class Input extends Component {
  state = {
    text: ""
  };

  handleInput(text) {
    this.setState({ text: text });
  }

  handleSubmit = () => {
    const { text } = this.state;

    if (!text) return; // Don't submit if empty

    const { onSubmitEditing } = this.props;
    onSubmitEditing(text);

    this.setState({ text: "" });
  };

  render() {
    return (
      <TextInput
        style={styles.textField}
        placeholder="Enter text here"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={text => this.handleInput(text)}
        value={this.state.text} //ogni volta che setti text di state viene aggiornato value
        // MARK: Secondo modo di settare una prop:
        onSubmitEditing={this.handleSubmit}
      />
    );
  }
}

const styles = StyleSheet.create({
  textField: {
    width: "80%",
    height: 40,
    marginBottom: 20,
    backgroundColor: "white"
  }
});
