import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import HumanSvg from '../assets/Icons/HumanSvg'
import SendSvg from '../assets/Icons/SendSvg'
import { COLORS } from '../constants/Colors'
import { AgeCalculator } from '../helpers/AgeCalculator'
import { StateType } from '../redux'
import { Date } from '../types/date'

const AgeDashboard = ({ totalCount }: any) => {

    const { currentDate, dateOfBirth } = useSelector((state: StateType) => state.DateSlice)
    const [age, setage] = useState<Date>({ years: 0, months: 0, days: 0, timeDiff: 0})

    useEffect(() => {
        setage(AgeCalculator(currentDate, dateOfBirth))
    }, [])
    return (
        <View style={styles.container}>

            <View style={styles.nameContainer}>
                <HumanSvg />
                <Text style={styles.name}>Age Dashboard</Text>
                <View style={styles.shareIcon}>
                    <SendSvg fill="white" />
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.ageContainer}>
                <Text style={styles.text}>{age?.years} Years</Text>
                <Text style={styles.text}>{age?.months} Months</Text>
                <Text style={styles.text}>{age?.days} Days</Text>
            </View>

            {
                totalCount = true ? <View style={styles.totalCountContainer}>
                    <View style={styles.totalTextContainer}>
                        <Text style={styles.totalText}>Total Years:</Text>
                        <Text style={styles.totalText}>Total Months:</Text>
                        <Text style={styles.totalText}>Total Weeks:</Text>
                        <Text style={styles.totalText}>Total Days:</Text>
                        <Text style={styles.totalText}>Total Hours:</Text>
                        <Text style={styles.totalText}>Total Minutes:</Text>
                        <Text style={styles.totalText}>Total Seconds:</Text>
                    </View>
                    <View style={styles.totalCountTextContainer}>
                        <Text style={styles.totalCountText}>{age?.years}</Text>
                        <Text style={styles.totalCountText}>{(age?.years * 12) + age?.months}</Text>
                        <Text style={styles.totalCountText}>{Math.floor(age.timeDiff / 604800000)}</Text>
                        <Text style={styles.totalCountText}>{Math.floor(age.timeDiff / 86400000)}</Text>
                        <Text style={styles.totalCountText}>{Math.floor(age.timeDiff / 3600000)}</Text>
                        <Text style={styles.totalCountText}>{Math.floor(age.timeDiff / 60000)}</Text>
                        <Text style={styles.totalCountText}>{Math.floor(age.timeDiff / 1000)}</Text>
                    </View>
                </View> : null
            }

        </View>
    )
}

export default AgeDashboard

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8
    },
    nameContainer: {
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
    divider: { width: 60, alignSelf: "center", borderTopColor: "black", borderTopWidth: 1, marginTop: 12, marginBottom: 6 },
    ageContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 12
    },
    text: {
        color: "white",
        backgroundColor: COLORS.LIGHT.headerBackground,
        padding: 10,
        borderRadius: 8,
        fontFamily: "Agdasima-Bold",
        fontSize: 26
    },
    totalCountContainer: {
        marginTop: 12,
        flexDirection: "row",
        gap: 12
    },
    totalTextContainer: {
        gap: 8,
        alignItems: "flex-end",
        width: "45%"
    },
    totalText: {
        fontSize: 20,
        fontFamily: "Agdasima-Bold",
        color: "black"
    },
    totalCountTextContainer: {
        gap: 8,
        alignItems: "flex-start",
        width: "50%"
    },
    totalCountText: {
        fontSize: 21,
        fontFamily: "Agdasima-Regular",
        color: "black"
    },
})