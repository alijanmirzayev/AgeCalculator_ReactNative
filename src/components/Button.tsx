import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'

const Button = ({title, fontSize, handle, backgroundColor}: any) => {
  return (
    <TouchableOpacity style={[styles.btn, {backgroundColor: backgroundColor}]} onPress={handle}>
        <Text style={[styles.btnText, {fontSize: fontSize}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        backgroundColor: COLORS.LIGHT.headerBackground,
        borderRadius: 12

    },
    btnText: {
        color: COLORS.LIGHT.headerText,
        fontFamily: "Agdasima-Bold",
        textAlign: "center",
        paddingVertical: 12,
        
    }
})