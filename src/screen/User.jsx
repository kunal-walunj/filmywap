import { StyleSheet, View } from 'react-native'
import React from 'react'
import Homeheader from '../components/Homeheader'
import Userview from '../components/Userview'

const User = () => {
 
  return (
    <View style={styles.bg}>
      <Homeheader/>
      <Userview />
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  bg:{
    flex:1,
    backgroundColor: 'black',}
})