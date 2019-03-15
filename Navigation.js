import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./Screen/Login.js";
import Home from "./Screen/Home.js";
import SecondView from "./Screen/SecondView.js";

const stackNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home },
    SecondView: { screen: SecondView }
  },

  { initialRouteName: "Login" }
);

const AppContainer = createAppContainer(stackNavigator);
export default AppContainer;
