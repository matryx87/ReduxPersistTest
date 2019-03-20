import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { gyroscope } from "react-native-sensors";

const Dimensions = require("Dimensions");
// const PixelRatio = require("PixelRatio");
const window = Dimensions.get("window");

const deviceWidth = window.width;
const deviceHeight = window.height;

const movingViewWidth = deviceWidth / 2;
const movingViewHeigth = deviceHeight / 5;

export default class SecondView extends Component {
  static navigationOptions = {
    title: "Map View"
  };

  componentDidMount() {
    const subscription = gyroscope.subscribe(({ x, y }) => {
      this.setState(state => ({
        y: y + state.y,
        x: x + state.x
      }));
    });
    this.setState({ subscription });
  }

  componentWillUnmount() {
    this.state.subscription.unsubscribe();
  }

  state = {
    // EX: half of 100 is ${100 / 2}`
    // When you write something inside ${} in a template literal, its result will be computed, converted to a string, and included at that position. The example produces “half of 100 is 50”.
    // image: `https://placeimg.com/${
    //   PixelRatio.getPixelSizeForLayoutSize(movingViewWidth)
    // }/${
    //   PixelRatio.getPixelSizeForLayoutSize(movingViewHeigth)
    // }/any`,
    x: 0,
    y: 0
  };

  render() {
    //Immagine al centro
    const positionOnScreenX = 0;
    const positionOnScreenY = 110;
    // The y axis of the sensor data resembles (somiglia) what we need for the x axis in the image
    const movementX = (this.state.y / 2000) * movingViewWidth;
    const movementY = (this.state.x / 2000) * movingViewWidth;

    return (
      <View style={styles.container}>
        <Text>MapView Screen</Text>

        {/* <View style={{ width: 100, height: 100, backgroundColor: "orange" }}/> */}

        {/* <Image
          translateX={positionOnScreenX + movementX}
          style={styles.image}
          source={{ uri: this.state.image }}
        /> */}

        <View
          translateX={positionOnScreenX + movementX}
          translateY={positionOnScreenY + movementY}
          style={{
            width: movingViewWidth,
            height: movingViewHeigth,
            backgroundColor: "orange"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: movingViewWidth,
    height: movingViewHeigth
  }
});
