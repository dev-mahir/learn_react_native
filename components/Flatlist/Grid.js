import React from 'react'
import { Text, StyleSheet, FlatList, ScrollView, Dimensions } from 'react-native'

const Grid = () => {

  const renderItems = ({ item, index }) => {
    return (
      <Text style={styles.item}>Hey</Text>
    )
  }

  
  const data = [
    { id: 1, name: "mahir" },
    { id: 2, name: "mahir" },
    { id: 3, name: "mahir" },
    { id: 4, name: "mahir" },
    { id: 5, name: "mahir" },
    { id: 6, name: "mahir" },
    { id: 7, name: "mahir" },
  ]

  return (
    <ScrollView>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item, index }) => renderItems(item, index)
        }
      />
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: 'salmon',
    color: 'white',
    margin: 5,
    padding: 10,
    width: (Dimensions.get('window').width - 30) / 2,
    borderRadius: 5,
    height: 120,
    textAlignVertical: "center",
    textAlign: 'center'
  }
})

export default Grid;