import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSelector } from 'react-redux'
import HumanSvg from '../assets/Icons/HumanSvg'
import SendSvg from '../assets/Icons/SendSvg'
import { COLORS } from '../constants/Colors'
import { AgeCalculator } from '../helpers/AgeCalculator'
import { StateType } from '../redux'
import { Date } from '../types/date'
import Input from './Input'
import TitleSvg from '../assets/Icons/TitleSvg'

const SaveAge = ({ totalCount }: any) => {

    const { currentDate, dateOfBirth } = useSelector((state: StateType) => state.DateSlice)
    const [age, setage] = useState<Date>({ years: 0, months: 0, days: 0, timeDiff: 0 })

    useEffect(() => {
        setage(AgeCalculator(currentDate, dateOfBirth))
    }, [])

    return (
            <View style={styles.container}>

                <View style={styles.nameContainer}>
                    <HumanSvg />
                    <Text style={styles.name}>Save the Date</Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.inputContainer}>
                    <Input placeholder="Title: My Birthday" icon={<TitleSvg fill="white" />} />
                </View>

                <View style={styles.inputCategoryContainer}>
                    <Text style={styles.inputCategoryText}>What is it?</Text>
                </View>

                <View style={styles.chooseContainer}>
                    
                        <Text style={styles.chooseText}>Birthday</Text>

                   
                        <Text style={styles.chooseText}>Anniversary</Text>

                    
                        <Text style={styles.chooseText}>Other</Text>
                </View>

                <TouchableOpacity style={styles.saveContainer}>
                    <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>

            </View>

    )
}

export default SaveAge

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 8
    },
    nameContainer: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 6
    },
    name: {
        color: "black",
        fontFamily: "Agdasima-Bold",
        fontSize: 24
    },
    shareIcon: {
        position: "absolute",
        right: 4,
        top: 0
    },
    divider: { width: 60, alignSelf: "center", borderTopColor: "black", borderTopWidth: 1, marginBottom: 6 },
    ageContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    text: {
        color: "white",
        backgroundColor: COLORS.LIGHT.headerBackground,
        padding: 10,
        borderRadius: 8,
        fontFamily: "Agdasima-Bold",
        fontSize: 26
    },
    saveContainer: {
        backgroundColor: "black",
        padding: 12,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        marginTop: 16,
        marginBottom: -1
    },
    saveText: {
        color: "white",
        textAlign: "center",
        fontSize: 16
    },
    inputContainer: { marginHorizontal: 16, marginTop: 8 },
    inputCategoryContainer: { marginVertical: 8, marginHorizontal: 16 },
    inputCategoryText: { fontFamily: "Agdasima-Bold", fontSize: 22, color: "black" },
    chooseContainer: { flexDirection: "row", justifyContent: "space-around", marginVertical: 6 },
    chooseText: { backgroundColor: COLORS.LIGHT.button, padding: 12, borderRadius: 8, color: "white", fontFamily: "Agdasima-Bold", fontSize: 18 }
})