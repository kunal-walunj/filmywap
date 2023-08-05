import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, {useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Userview = () => {

  const [username, setusername] = useState('');
  const [email, setmail] = useState('');
  const [no, setno] = useState('');

  const navigation = useNavigation();

  const handleLogout = async () => {
    try { 
      // Remove the stored username from AsyncStorage to indicate the user is logged out
      await AsyncStorage.removeItem('loggedInUser');
      await AsyncStorage.removeItem('SignInPass');
      await AsyncStorage.removeItem('SignInno');
      await AsyncStorage.removeItem('SignInemail');
  
      // You can also perform navigation to the login screen here
      Alert.alert('Logged out successfully');
      navigation.navigate('Login')
    } catch (error) {
      console.error('Error removing data:', error);
    }
    
  };

  const fetchDatafromAsyncstorage= async()=>{
    const uname = await AsyncStorage.getItem('SignInUser');
    const uno =  await AsyncStorage.getItem('SignInno');
    const uemail = await AsyncStorage.getItem('SignInemail');

    setusername(uname);
    setmail(uemail);
    setno(uno);
  }

  useEffect(()=>{
    fetchDatafromAsyncstorage()
  },[])
  
  return ( 
    <View style={styles.userview}>
      <View style={styles.usercontent}>
        <Text style={styles.profilebg}>Profile</Text>
        <Text style={styles.textbg}> Name : {username}  </Text>
        <Text style={styles.textbg}> Email : {email}  </Text>
        <Text style={styles.textbg}>mobile no : {no} </Text>
        <TouchableOpacity style={styles.buttonbg} onPress={handleLogout}>
          <Text style={styles.logout} >Logout</Text>
        </TouchableOpacity>
        <Text style={styles.textlast}>all rights reserve to the @kunalwalunj</Text>
      </View>
    </View>)
}

export default Userview

const styles = StyleSheet.create({
  userview: {
    height: '90%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    
  },
  usercontent: {
    height: '70%',
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    borderWidth:1,
    borderColor:'grey',
    borderRadius:30
  
  },
  textbg: {
    backgroundColor: 'black',
    height: '10%',
    width: '90%',
    color: 'white',
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: 17,
    fontWeight:400,
    fontWeight: '300',
    borderColor:'grey',
    borderWidth: 1,
    borderRadius:10

  },
  profilebg: {
    backgroundColor: 'black',
    height: '10%',
    width: '80%',
    color: 'tomato',
    display: 'flex',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30,
    fontWeight:500,
  },
  buttonbg: {
    backgroundColor: 'tomato',
    height: '10%',
    width: '90%',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10

  },
  logout:{
    fontSize:20,
    fontWeight:400
  },
  textlast: {
    backgroundColor: 'black',
    height: '10%',
    width: '80%',
    color: 'white',
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: 18,
    fontWeight: '300',

  },
})