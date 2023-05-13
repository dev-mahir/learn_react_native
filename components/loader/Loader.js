
//loader or activity indicator
import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const Loader = () => {
  return (
    <View>
      <ActivityIndicator
        size={50}
        color="salmon"
        // animating={false} // hide 
      >
      </ActivityIndicator>
    </View>
  )
}

export default Loader;