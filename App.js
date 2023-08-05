
import { StyleSheet, View, StatusBar } from 'react-native';
// import Home from './src/screen/Home'
import React  from 'react';
import Login from './src/screen/Login'
import Appnav from './src/nav/Appnav';
import Signup from './src/screen/Signup';
import Start from './src/screen/Start';
import Info from './src/components/Info';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' hidden={false} />
      <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown:false }}>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Appnav" component={Appnav} />
          <Stack.Screen name="Info" component={Info} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>

  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor:'black'
  },
});
