import { FlatList, StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const Homeview = () => {
  
  const navigation = useNavigation();

  const handleImageClick = (image) => {
  
    navigation.navigate('Info',{image});
    console.log(image)
  };

  const [upcoming, setupcoming] = useState([]);
  const [popular, setpopular] = useState([]);
  const [top, settop] = useState([]);
  const [best, setbest] = useState([]);

  const [isload, setload] = useState();

  const url2 = 'https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';
  const url3 = 'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';
  const url4 = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';
  const url = 'https://movies-app.prakashsakari.repl.co/api/movies';

  //upcoming

  const Upcomingm = async () => {

    try {
      const res = await fetch(url2);
      const data = await res.json();
      setupcoming(data.results);
      console.log(data.results)
      setload(false)
    }

    catch (error) {
      console.log(error)
      setload(false)
    }

  }

    //trending

    const Treadingm = async () => {

      try {
        const res = await fetch(url3);
        const data = await res.json();
        setpopular(data.results);
        console.log(data.results)
        setload(false)
      }
  
      catch (error) {
        console.log(error)
        setload(false)
      }
  
    }
  

  //top


  const Topm = async () => {

    try {
      const res = await fetch(url4);
      const data = await res.json();
      settop(data.results);
      console.log(data.results)
      setload(false)
    }

    catch (error) {
      console.log(error)
      setload(false)
    }

  }

  //best 

  const Bestm = async () => {

    try {
      const res = await fetch(url);
      const data = await res.json();
      setbest(data);
      console.log(data)
      setload(false)
    }

    catch (error) {
      console.log(error)
      setload(false)
    }

  }

  useLayoutEffect(() => { 
    setload(true)
    Upcomingm();
    Treadingm();
    Topm();
    Bestm();
  }, [])


  if (isload) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} color={'red'} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={styles.homeview}>
        <Text style={styles.headtxt}>Upcoming</Text>
        <FlatList data={upcoming}
          horizontal
          showsVerticalScrollIndicator={false}
          renderItem={(x) => {
            return (
              <View style={styles.homecontent} >
                <View>
                  <TouchableOpacity onPress={() => handleImageClick(x.item)} style={styles.homeupcome}>
                    <Image style={styles.img} source={{ uri: `https://image.tmdb.org/t/p/original/${x.item.backdrop_path}` }} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.text}>{x.item.original_title}</Text>
              </View>
            )
          }} />


        <Text style={styles.headtxt}>Trending</Text>
        <FlatList data={popular}
          horizontal
          showsVerticalScrollIndicator={false}
          renderItem={(x) => {
            return (
              <View style={styles.homecontent} >
                <View style={styles.homeapi}>
                <TouchableOpacity onPress={() => handleImageClick(x.item)} style={styles.homeapi}>
                  <Image style={styles.img} source={{ uri: `https://image.tmdb.org/t/p/original/${x.item.poster_path}` }} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.text}>{x.item.original_title.slice(0, 10) + '...'}</Text>
              </View>
            )
          }} />

        <Text style={styles.headtxt}>Top</Text>
        <FlatList data={top}
          horizontal
          showsVerticalScrollIndicator={false}
          renderItem={(x) => {
            return (
              <View style={styles.homecontent} >
                <View style={styles.homeapi}>
                <TouchableOpacity onPress={() => handleImageClick(x.item)} style={styles.homeapi}>
                  <Image style={styles.img} source={{ uri: `https://image.tmdb.org/t/p/original/${x.item.poster_path}` }} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.text}>{x.item.original_title.slice(0, 10) + '...'}</Text>
              </View>
            )
          }} />

       
      </View>
    </ScrollView>
  )
}

export default Homeview

const styles = StyleSheet.create({

  homeview: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  homecontent: {
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    paddingHorizontal: 5
  },
  homeapi: {
    height: 200,
    width: 135,
    borderWidth: 1,
    borderColor: 'grey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  homeupcome: {
    height: 200,
    width: 350,
    borderWidth: 1,
    borderColor: 'grey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  info: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop: 20
  },

  img: {
    height: '100%',
    width: '100%',
    borderWidth: 0.8,
    borderRadius: 10
  },

  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    paddingVertical:5
  },

  loader: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },

  headtxt: {
    color: 'white',
    fontSize: 20,
    paddingVertical: 5,
    marginLeft: 15
  },
})