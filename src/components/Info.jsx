import { StyleSheet, Image,Text, View, ScrollView ,} from 'react-native'
import React from 'react'
import Homeheader from './Homeheader';


const Info = ({route}) => {
    const { image } = route.params;
    console.log(image)
  return (
   
   <View style={styles.infoview}>
    <Homeheader/>
  
       <View style={styles.userview}>
      <View style={styles.usercontent}> 
      <ScrollView style={styles.scroll} >
      <Image style={styles.img} source={{ uri: `https://image.tmdb.org/t/p/original/${image.poster_path}` }} />
      <Text style={styles.text} >title : {image.original_title}</Text>
      <Text style={styles.text} >language : {image.original_language}</Text>
      <Text style={styles.text} >popularity : {image.popularity}</Text>
      <Text style={styles.text} >release date : {image.release_date}</Text>
      <Text style={styles.text} >overview : {image.overview}</Text>
      </ScrollView> 
      </View>
   
    </View>
 
    </View> 
  
  )
}

export default Info

const styles = StyleSheet.create({
  infoview:{
    height: '100%',
    width: '100%',
    backgroundColor:'black'
  },
  userview: {
    height: '95%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    
  },
  usercontent: {
    height: '95%',
    width: '90%',
    display: 'flex',
    alignItems:'flex-start',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    borderWidth:1,
    borderColor:'grey',
    borderBottomRightRadius:10,
    borderTopLeftRadius:10,
    paddingBottom:5
  },
  scroll:{
    padding:10
  },
  img: {
    height:500,
    width: '100%',
    borderTopLeftRadius:10,
  
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    textAlign:'justify',
    paddingHorizontal:10,
    paddingVertical:10
  },
})