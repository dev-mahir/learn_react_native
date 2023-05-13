import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

const Pressables = () => {
  return (
    <View style={{ margin: 10 }}>
      <Pressable
        onPress={() => { console.warn("Press") }}
        onLongPress={() => console.warn("Long press")}
      >
        <Text style={styles.btn}>Pressable</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    textAlign: "center",
    backgroundColor: "tomato",
    color: "white",
    paddingVertical: 10,
    fontWeight: "600",
    width: '100%' // or remove this line
  }
});

export default Pressables;
