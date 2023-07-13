import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = ({placeholder, icon}: any) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#4f4f4f"
                style={styles.input}
            />
            <View style={styles.icon}>
                {icon}
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 6,
        paddingHorizontal: 12
    },
    input: {
        color: "#4f4f4f",
        fontFamily: "Agdasima-Regular",
        fontSize: 16,
        marginLeft: 22,
    },
    icon :{
        position:"absolute", top: 12, left: 10
    }
})