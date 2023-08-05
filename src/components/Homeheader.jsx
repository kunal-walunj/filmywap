import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Homeheader = () => {
    return (
        <View style={styles.head}>
            <Text style={styles.headtext}>FILMYWAP</Text>
        </View>
    )
}

export default Homeheader

const styles = StyleSheet.create({
    head: {
        height: 60,
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.8,
        borderBottomColor: 'grey',
    },
    headtext: {
        color: 'tomato',
        fontSize: 30,
        fontWeight: 'bold',
    }
})