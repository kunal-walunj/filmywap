import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = () => {

  const [logusername, setlogusername] = useState('');
  const [logpassword, setlogpassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {

    if (logusername && logpassword) {
      try {
        const signname = await AsyncStorage.getItem('SignInUser');
        const signpass = await AsyncStorage.getItem('SignInPass');

        await AsyncStorage.setItem('loggedInUser', logusername);
        await AsyncStorage.setItem('loggedInPass', logpassword);

        if (signname === logusername && signpass === logpassword) {
          Alert.alert('Login successful');
          navigation.navigate('Appnav');
        } else {
          Alert.alert('Login Failed', 'Incorrect username or password. Please try again.');
        }

      } catch (error) {
        console.error('Error saving data:', error);
      }
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  return (
    <View style={styles.log}>
      <View style={styles.login}>
        <Text style={styles.logtxt}>Login</Text>
        <TextInput style={styles.inp} placeholder='enter your name' color='white'
          placeholderTextColor={'seashell'} cursorColor={'snow'}
          autoCapitalize='none'  autoCorrect={false} 
          onChangeText={(data) => { setlogusername(data) }} />

        <TextInput style={styles.inp} placeholder='enter your passward' color='white'
          placeholderTextColor={'seashell'} cursorColor={'snow'}
          autoCapitalize='none'  autoCorrect={false} 
          onChangeText={(data) => { setlogpassword(data) }} />

        <TouchableOpacity style={styles.but} onPress={handleLogin}>
          <Text style={styles.butlog}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('Signup') }}>
          <Text style={styles.butlogin}> or SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  log: {
    flex: 1,
    backgroundColor: 'yellowgreen',
    alignItems: 'center',
    justifyContent: 'center',

  },
  login: {
    height: 300,
    width: '80%',
    borderWidth: 1,
    borderColor: 'snow',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',

  },
  logtxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'snow',

  },
  inp: {
    height: '10%',
    width: '90%',
    borderBottomWidth: 1,
    borderColor: 'snow',
    fontSize: 20,
    marginVertical: '2%',
    marginVertical: 20
  },
  but: {
    height: '15%',
    width: '90%',
    backgroundColor: 'snow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 5
  },
  butlog: {
    color: 'yellowgreen',
    fontSize: 20,
  },
  butlogin: {
    fontSize: 15,
  }
})