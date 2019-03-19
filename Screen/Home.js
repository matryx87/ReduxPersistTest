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

  state = {
    height: new Animated.Value(100),
    width: new Animated.Value(100),
    color: new Animated.Value(0),
    opacity: new Animated.Value(0),
    position: new Animated.ValueXY({ x: -100, y: 0 }),
    degrees: new Animated.Value(0)
  };

  startAnimation = () => {
    const { height, width } = this.state;

    // Reset the value if needed
    height.setValue(100);
    width.setValue(100);

    // Animazione di Animated.Value (height)
    Animated.spring(height, { toValue: 300, friction: 0.8 }).start();
    Animated.spring(width, { toValue: 300, friction: 0.8 }).start();
  };

  startColorAnimation = () => {
    const { color } = this.state;

    // Reset the value if needed
    color.setValue(0);

    // Animazione di Animated.Value (color) - duration in ms
    Animated.timing(color, { toValue: 1, duration: 2000 }).start();
  };

  startFadingAnimation = () => {
    const { opacity } = this.state;

    // Reset the value if needed
    opacity.setValue(0);

    // Animazione di Animated.Value (opacity) - duration in ms
    Animated.timing(opacity, { toValue: 1, duration: 2000 }).start();
  };

  startComposedAnimation = () => {
    const { position, degrees } = this.state;

    position.setValue({ x: -100, y: 0 });
    degrees.setValue(0);

    Animated.sequence([
      Animated.parallel([
        Animated.spring(position, { toValue: { x: 100, y: 0 } }),
        Animated.timing(degrees, { toValue: 1, duration: 500 })
      ]),
      Animated.spring(position, { toValue: { x: 100, y: 110 } })
    ]).start(); // start the sequence group
  };

  // componentDidMount() {
  //   this.startAnimation();
  // }

  render() {
    const { height, width, color, opacity, position, degrees } = this.state;

    const backgroundColorConfig = color.interpolate({
      // inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
      // outputRange: ["aliceblue", "red", "orange", "green", "purple", "black"]

      inputRange: [0, 1],
      outputRange: ["blue", "red"]
    });

    const spinConfig = degrees.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
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
          title="Change View Color"
          onPress={() => this.startColorAnimation()}
        />
        <AnimatedView
          style={[styles.view, { backgroundColor: backgroundColorConfig }]}
        />

        <Button
          title="Change View Opacity"
          onPress={() => this.startFadingAnimation()}
        />
        <AnimatedView style={[styles.view, { opacity: opacity }]} />

        <Button
          title="Composed View Animation"
          onPress={() => this.startComposedAnimation()}
        />
        <AnimatedView
          style={[
            styles.view,
            position.getLayout(),
            { transform: [{ rotate: spinConfig }] }
          ]}
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
    backgroundColor: "black",
    height: 100,
    width: 100
  }
});
