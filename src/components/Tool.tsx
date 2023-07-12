import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'

const Tool = ({item}: any) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{uri: item.image}} />
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  )
}

export default Tool

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', margin: 3, backgroundColor: COLORS.LIGHT.button, borderRadius: 6 },
    image: {width: 100, height: 80, borderRadius: 12, resizeMode: "contain", padding: 6},
    text: {
        color: COLORS.LIGHT.headerText,
        fontSize: 16,
        fontFamily: "Agdasima-Bold",
        textAlign: "center",
        marginVertical: 10
    }
})