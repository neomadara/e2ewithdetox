import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

import {SafeAreaView} from "react-native-safe-area-context";
import React, {useEffect, useState} from "react";

export default function HomeScreen() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false)


  useEffect(() => {
    if (userName !== '' && password !== '') {
      setShowWelcomeMessage(true)
    } else {
      setShowWelcomeMessage(false)
    }
  }, [userName, password])

  return (
    <SafeAreaView testID='safe-area'>
      <View testID={"welcome-screen"}>
        <Text testID="title">
          Login Form
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setUserName}
          value={userName}
          placeholder={'username'}
          testID="input-username"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder={'password'}
          textContentType={'password'}
          testID="input-password"
        />
        {showWelcomeMessage && (
          <Text testID='welcomeMessage'>welcome</Text>
        )}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
