import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Input from "../Components/Input.js";
import CustomButton from "../Components/CustomButton.js";
import { connect } from "react-redux";
// import { bindActionCreators } from "../../../../Library/Caches/typescript/3.3/node_modules/redux/index.js";
// import { bindActionCreators } from "redux";

import {
  increment,
  decrement,
  addEmail,
  addPassword
} from "../actions/pippo.js";

class Login extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "white"
    },
    headerTintColor: "transparent",
    headerTitleStyle: {
      fontWeight: "bold"
    },

    header: null // Nasconde la nav bar
  };

  state = {
    login: {
      email: null,
      password: null,
      state: {
        pending: false,
        success: false,
        error: "Error"
      }
    },

    pippo: 0
  };

  // Confronta lo store di redux (nextProps) che ho mappato // chiamato dal componente durante il ciclo di vita del componente stesso ogni volta che cambia una prop (è nel ciclo di vita non c entra con redux)
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps", prevState.login, nextProps.login);

    if (nextProps.pippo != prevState.pippo) {
      return { ...prevState, pippo: nextProps.pippo }; //copiami lo stato e modifica solo l attributo pippo
    }
    console.log("BOOL", prevState.login != nextProps.login ? true : false);
    if (nextProps.login != prevState.login) {
      console.log("BOOL", prevState.login != nextProps.login ? true : false);
      console.log("return:", { ...prevState, login: nextProps.login });
      return { ...prevState, login: nextProps.login };
    }

    return { ...prevState };
  }

  handleEmailSubmit = email => {
    if (!email) return; // Don't submit if empty
    this.props.addEmail(email);
  };

  handlePasswordSubmit = password => {
    if (!password) return;
    this.props.addPassword(password);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>

        <Input onSubmitEditing={this.handleEmailSubmit} />
        <Input onSubmitEditing={this.handlePasswordSubmit} />

        <Text style={styles.instructions}> {this.state.login.email} </Text>
        <Text style={styles.instructions}> {this.state.login.password} </Text>

        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Home")}
        />

        <CustomButton
          text="Login"
          onPress={() => this.props.navigation.navigate("Home")}
          onLongPress={() => {
            alert("Hi there!!!");
          }}
        />

        <Button title="Incrementa" onPress={() => this.props.increment()} />

        <Button title="Decrementa" onPress={() => this.props.decrement()} />

        <Text style={styles.welcome}> {this.state.pippo} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "aliceblue"
  },
  welcome: {
    marginTop: 54,
    marginBottom: 100,
    fontSize: 17,
    textAlign: "center"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 40
  }
});

//lo store di redux è immutabile quindi utilizzi mapsStateToProps e getDerivedBla per aggiornare lo stato del componente

// funzione che prende lo store redux e permette di estrarne le info che mi servono e le fa diventare prop (pippo diventa una prop ) che uso nel getDerivedState
const mapStateToProps = state => {
  console.log("mapStateToProps", state);

  return {
    pippo: state.pippo,
    login: state.login,
    email: state.login.email,
    password: state.login.password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    addEmail: email => {
      dispatch(addEmail(email));
    },
    addPassword: password => {
      dispatch(addPassword(password));
    }
  };
};

// in app c è Provider che propaga lo store di redux a tutti i figli (nel nostro caso Login)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
