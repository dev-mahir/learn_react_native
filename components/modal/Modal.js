
import React, { useState } from 'react'
import { View, Modal, Text, Button, StyleSheet } from 'react-native';

const Modals = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <View style={{ backgroundColor: 'salmon', flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Modal
          animationType="slide"
          tranparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.modalView}>
            <View>
              <Text>Hello Modal</Text>
            </View>
            <Button
              title="close modal"
              onPress={() => { setModalVisible(false) }}
            />
        </View>
        </Modal>
      </View>


      <Button
        title="Open modal"
        onPress={() => { setModalVisible(true) }}
      />






    </View>
  )
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})


export default Modals;