import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Animated
} from "react-native";

// Wrap a component to make it animatable
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
  TouchableOpacity
);

const AnimatedView = Animated.createAnimatedComponent(View);

export default class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  // constructor() {
  //   super();

  //   this.Animation = new Animated.Value(0);
  // }

  state = {
    height: new Animated.Value(100),
    width: new Animated.Value(100),
    color: new Animated.Value(0)
  };

  startAnimation = () => {
    const { height, width } = this.state;

    // Reset the value if needed
    height.setValue(100);
    width.setValue(100);

    // Start a spring animation
    Animated.spring(height, { toValue: 300, friction: 0.8 }).start();
    Animated.spring(width, { toValue: 300, friction: 0.8 }).start();
  };

  startColorAnimation = () => {
    const { color } = this.state;

    color.setValue(0);

    Animated.timing(color, {
      toValue: 1,
      duration: 3333
    }).start();
  };

  // componentDidMount() {
  //   this.startAnimation();
  // }

  render() {
    const { height, width } = this.state;
    const { color } = this.state;

    const backgroundColorConfig = color.interpolate({
      // inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
      // outputRange: ["aliceblue", "red", "orange", "green", "purple", "black"]

      inputRange: [0, 1],
      outputRange: ["blue", "red"]
    });

    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>

        <Button
          title="Go to SecondView"
          onPress={() => this.props.navigation.navigate("SecondView")} // Torna alla Home (o a qualsiasi altro screen dello stack)
        />

        <AnimatedTouchableOpacity
          onPress={this.startAnimation}
          style={[styles.button, { height, width }]}
        >
          <Text style={styles.text}>Tap Me</Text>
        </AnimatedTouchableOpacity>

        <Button
          title="Animate View"
          onPress={() => this.startColorAnimation()}
        />
        <AnimatedView
          style={[styles.view, { backgroundColor: backgroundColorConfig }]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "aliceblue"
  },
  button: {
    backgroundColor: "steelblue",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 24
  },
  view: {
    height: 100,
    width: 100
  }
});
