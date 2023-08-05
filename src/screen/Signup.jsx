import { StyleSheet, Text, TouchableOpacity, View, Alert, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const Signup = () => {

  const navigation = useNavigation();

  const [Signusername, setusername] = useState('');
  const [Signemail, setmail] = useState('');
  const [Signno, setno] = useState('');
  const [Signpassword, setpassword] = useState('');
  const [cpass, setcpass] = useState('');

  const handleSignup = async () => {


    // Check if the username and password are correct (add your own authentication logic)
    if (Signusername && Signpassword) {
      try {

        // Save the username in AsyncStorage to indicate the user is logged in
        await AsyncStorage.setItem('SignInUser', Signusername);
        await AsyncStorage.setItem('SignInPass', Signpassword);
        await AsyncStorage.setItem('SignInno', Signno);
        await AsyncStorage.setItem('SignInemail', Signemail);

        // You can also perform navigation to the next screen here
        Alert.alert('Signup successful');
        navigation.navigate('Login');
      } catch (error) {
        console.error('Error saving data:', error);
      }
    } else {
      Alert.alert('Invalid credentials');
    }



  };


  return (

    <View style={styles.sign}>
      <View style={styles.signup}>
        <Text style={styles.signtxt}>SignUp</Text>
        <TextInput style={styles.inp} placeholder='enter your name' color='white'
          placeholderTextColor={'seashell'} cursorColor={'snow'}
          autoCapitalize='none'
          onChangeText={(data) => { setusername(data) }} />

        <TextInput style={styles.inp} placeholder='enter your email' color='white'
          placeholderTextColor={'seashell'} cursorColor={'snow'}
          autoCapitalize='none'
          onChangeText={(data) => { setmail(data) }} />

        <TextInput style={styles.inp} placeholder='enter your mobile no' color='white'
          keyboardType='number-pad'
          autoCapitalize='none'
          placeholderTextColor={'seashell'} cursorColor={'snow'}
          onChangeText={(data) => { setno(data) }} />

        <TextInput style={styles.inp} placeholder='enter your password' color='white'
          placeholderTextColor={'seashell'} cursorColor={'snow'}
          autoCapitalize='none'
          onChangeText={(data) => { setpassword(data) }} />

        <TextInput style={styles.inp} placeholder=' confirm password' color='white'
          placeholderTextColor={'seashell'} cursorColor={'snow'}
          autoCapitalize='none'
          onChangeText={(data) => { setcpass(data) }} />

        <TouchableOpacity style={styles.but} onPress={handleSignup}>
          <Text style={styles.butsign}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
          <Text style={styles.butlogin}> or Login</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default Signup

const styles = StyleSheet.create({
  sign: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',

  },
  signup: {
    height: 450,
    width: '80%',
    borderWidth: 1,
    borderColor: 'snow',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30
  },
  signtxt: {
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
    marginVertical: '2%'
  },
  but: {
    height: '12%',
    width: '90%',
    backgroundColor: 'snow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 5
  },
  butsign: {
    color: 'tomato',
    fontSize: 20,
  },
  butlogin: {
    fontSize: 15,
  }
})