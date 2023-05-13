import React, { useState } from 'react'
import { ScrollView, StyleSheet, TextInput, View } from 'react-native'

const Form = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  console.warn(password);

  return (
    <ScrollView  >
      <View style={styles.formWrapper}>
        <TextInput style={styles.textInput}
          value={name}
          name="name"
          onChangeText={(text) => setName(text)} placeholder='Enter name' />

        <TextInput style={styles.textInput}
          value={email}
          name="name"
          onChangeText={(text) => setEmail(text)} placeholder='Enter email' />

        <TextInput style={styles.textInput}
          value={password}
          name="password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)} placeholder='Enter password' />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    rowGap: 10,
    padding: 10

  },
  textInput: {
    borderWidth: 1,
    fontSize: 20,
    borderColor: "gray",
    padding: 10
  }
})







export default Form