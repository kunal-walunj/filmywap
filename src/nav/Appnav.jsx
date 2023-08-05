import { StyleSheet, } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home'
import Search from '../screen/Search'
import User from '../screen/User'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'  
import AsyncStorage from '@react-native-async-storage/async-storage';


const Tab = createBottomTabNavigator();


const Appnav = () => {

  const data = async () => {
    const storeuname = await AsyncStorage.getItem('username');
    console.log(storeuname)
  }

  useEffect(() => {
    data()
  }, [])

  return (

    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: 'black' },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: "white",

      }}>
      <Tab.Screen name="User" component={User}

        options={{
          tabBarIcon: ({ color, size }) =>
            (<FontAwesome name='user' color={color} size={size} />)
        }} >
      </Tab.Screen>

      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ color, size }) =>
            (<MaterialIcons name='home' color={color} size={size} />)
        }} />

      <Tab.Screen name="Search" component={Search}
        options={{
          tabBarIcon: ({ color, size }) =>
            (<FontAwesome name='search' color={color} size={size} />)
        }} />

    </Tab.Navigator>
  )
}

export default Appnav

const styles = StyleSheet.create({
  nav: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black'
  }
})