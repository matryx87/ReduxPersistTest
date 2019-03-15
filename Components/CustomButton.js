import React, { Component } from "react";
import PropTypes from "prop-types"; // Library used to declare what types of properties the CustomButton will have
import { TouchableOpacity, Text, StyleSheet } from "react-native";

class CustomButton extends Component {
  render() {
    const { text, onPress, onLongPress } = this.props;
    return (
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => onPress()}
        onLongPress={() => onLongPress()}
      >
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  onLongPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    color: "#ffffff",
    textAlign: "center"
  },

  buttonStyle: {
    padding: 10,
    backgroundColor: "#202646",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,

    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
    height: 40,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  }
});

export default CustomButton;
