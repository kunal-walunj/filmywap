import { StyleSheet, View } from 'react-native'
import React from 'react'
import Homeheader from '../components/Homeheader'
import Homeview from '../components/Homeview'
// import Info from '../components/Info'


const Home = () => {


  return (
    <View style={styles.bg}>
        <Homeheader/>
        <Homeview/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  bg:{
    flex:1,
    backgroundColor:'black',
  }
})