import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image
} from 'react-native';

import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';

export default class Login extends Component {
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <Container>
          <Image
            style={styles.image}
            source={require('../images/dog.jpg')}
          />
        </Container>
        <Container>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
          />
        </Container>
        <Container>
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="Password"
          />
        </Container>
        <Container>
          <Button
            label="Login"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
          />
        </Container>
        <Container>
          <Button
            label="Sign Up"
            styles={{label: styles.buttonBlackText}}
          />
        </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'skyblue',
    padding: 30,
    flexDirection: 'column'
  },
  textInput: {
    height: 80,
    fontSize: 30
  },
  image: {
    flex: 1,
    width: null,
    height: 220,
    resizeMode: 'contain'
  },
  buttonWhiteText: {
    fontSize: 20,
    color: '#FFF'
  },
  buttonBlackText: {
    fontSize: 20,
    color: '#595856'
  },
  primaryButton: {
    backgroundColor: '#34A853'
  },
});
