import { StyleSheet, Text, TextInput, View, FlatList, Image, ActivityIndicator, TouchableOpacity, } from 'react-native'
import React, { useState, useEffect } from 'react'
import filter from 'lodash.filter'
import { useNavigation } from '@react-navigation/native';

const Searchview = () => {
  const [movies, setmovies] = useState([]);
  const [inputtxt, setinputtxt] = useState('');
  const [iserror, seterror] = useState('');
  const [isload, setload] = useState();
  const [finaldata, setfinaldata] = useState([]);

  const navigation = useNavigation();

  const handleImgClick = (image) => {

    navigation.navigate('Info', { image });
    console.log(image)
  };

  const handleinput = (text) => {
    setinputtxt(text)
    const fullquery = text;

    const filterdata = filter(finaldata, (movie) => {
      return contains(movie.title, fullquery)
    })
    setmovies(filterdata)
  }

  const contains = (title, inputtxt) => {

    if (title.toLowerCase().includes(inputtxt.toLowerCase())) {
      return true;
    }
    else {
      return false;
    }
  }

  const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';

  const searchmovies = async () => {

    try {
      const res = await fetch(url);
      const data = await res.json();
      setmovies(data.results);
      console.log(data.results)
      setload(false)
      setfinaldata(data.results)
    }

    catch (error) {
      console.log(error)
      setload(false)
    }
  }

  useEffect(() => {
    setload(true)
    searchmovies();
  }, [])

  if (isload) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} color={'red'} />
      </View>
    )
  } else {
    <Text>{iserror}</Text>
  }

  return (
    <View style={styles.searchview}>
      <TextInput cursorColor={'grey'}
        placeholder='search your movie here'
        placeholderTextColor={'grey'}
        onChangeText={(text) => { handleinput(text) }}
        style={styles.inp}

      />
      <View>

        {<FlatList data={movies}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={(x) => {
            return (
              <View style={styles.searchcontent} >
                <TouchableOpacity onPress={() => { handleImgClick(x.item) }}>
                  <View style={styles.searchapi}>
                    <Image style={styles.img} source={{ uri: `https://image.tmdb.org/t/p/original/${x.item.backdrop_path}` }} />
                    <View style={styles.info}>
                      <Text style={styles.text} >{x.item.title}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )
          }} />}
        <View style={styles.last}>
        </View>
      </View>
    </View>
  )
}

export default Searchview

const styles = StyleSheet.create({

  searchview: {
    height: '105%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  usercontent: {
    height: '90%',
    width: '90%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'grey',
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingBottom: 10
  },
  inp: {
    marginVertical: 15,
    height: 50,
    width: 400,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },
  searchcontent: {
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10
  },
  searchapi: {
    height: 260,
    width: 400,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  info: {
    height: '20%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  img: {
    height: 200,
    width: 390,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',

  },
  loader: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'

  },
  last: {
    height: '20%'
  },


})