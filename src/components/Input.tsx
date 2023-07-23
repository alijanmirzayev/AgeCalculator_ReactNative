import { StyleSheet, Text, View, TextInput, ScrollView, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React from 'react'
import { COLORS } from '../constants/Colors'

const Input = ({ placeholder, icon }: any) => {
    return (
            <View style={styles.container}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="white"
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
    keyboardContainer: {
        flex: 1,
    },
    container: {
        backgroundColor: COLORS.LIGHT.button,
        borderRadius: 6,
        paddingHorizontal: 12
    },
    input: {
        color: "white",
        fontFamily: "Agdasima-Regular",
        fontSize: 20,
        marginLeft: 22,
    },
    icon: {
        position: "absolute", top: 12, left: 10
    }
})