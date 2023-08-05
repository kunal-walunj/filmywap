import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Start = () => {

  const navigation = useNavigation()

  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  const checkLoggedInStatus = async () => {
    try {
      const username = await AsyncStorage.getItem('loggedInUser');
      // If the username is not null, the user is logged in
      if (username) {
        // You can navigate to the main screen directly here
       
          navigation.navigate('Appnav')
       
      } else {
        // You can navigate to the login screen directly here
      
          navigation.navigate('Login')
       
      }
    } catch (error) {
      console.error('Error reading data:', error);
    }
  };

  return (
    <View style={styles.home}>
   
    </View>
  )
}

export default Start

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
})