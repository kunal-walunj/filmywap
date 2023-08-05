import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Searchview from '../components/Searchview'
import Homeheader from '../components/Homeheader'
// import Searchinfo from '../components/Searchinfo'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SearchStack = createNativeStackNavigator();

const Search = () => {
  return (
    <View style={styles.bg}>
       <Homeheader/>
       <Searchview/>   
   </View>
  )
}

export default Search

const styles = StyleSheet.create({
  bg:{
    flex:1
  }
})