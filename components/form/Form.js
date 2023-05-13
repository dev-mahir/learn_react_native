// RN has no radio btn


import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native'
import { RadioButton } from 'react-native-paper';

const Form = () => {
  const [checked, setChecked] = React.useState(null);
  const [display, setDisplay] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.warn(checked);

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

        <View>
          <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
            <RadioButton
              value="male"
              status={checked === 'male' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('male')}
            />
            <Text>Male</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="female"
              status={checked === 'female' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('female')}
            />
            <Text>Female</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <View></View>
            <Text style={styles.radioText}>radio 1</Text>
          </TouchableOpacity>
        </View>


        <Button
          title='Print value'
          onPress={() => { setDisplay(true) }} />
        <Button
          title='Reset'
          onPress={() => { }}
          color="salmon"
        />

        {
          display ? <View style={{ marginTop: 20 }}>
            <Text>User name is:{name} </Text>
            <Text>User email is: {email}</Text>
            <Text>User password is: {password} </Text>
          </View> : null
        }
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
    borderRadius: 5,
    padding: 10
  },
  resetBtn: {
    backgroundColor: "salmon"
  },
  radioText: {}
})







export default Form;