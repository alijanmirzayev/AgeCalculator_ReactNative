import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BirthdayCakeSvg from '../assets/Icons/BirthdayCakeSvg'
import SendSvg from '../assets/Icons/SendSvg'
import { COLORS } from '../constants/Colors'

const NextBirthdayDasboard = () => {
    return (
        <View style={styles.container}>

            <View style={styles.nameContainer}>
                <BirthdayCakeSvg />
                <Text style={styles.name}>Next Birthday Dashboard</Text>
                <View style={styles.shareIcon}>
                    <SendSvg fill="white" />
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.ageContainer}>
                <Text style={styles.info}>Time left until next birthday</Text>
                <View style={styles.nextBirthdayContainer}>
                    <Text style={styles.text}>10 Months</Text>
                    <Text style={styles.text}>26 Days</Text>
                </View>
                <TouchableOpacity style={styles.birthdayCountdown}>
                    <Text style={styles.birthdayCountdownText}>See Birthday Countdown</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default NextBirthdayDasboard

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        // padding: 16,
        borderRadius: 8
    },
    nameContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        padding: 16,
    },
    name: {
        color: "black",
        fontFamily: "Agdasima-Bold",
        fontSize: 24
    },
    shareIcon: {
        position: "absolute",
        right: 16,
        top: 18
    },
    divider: {
        width: 60,
        alignSelf: "center",
        borderTopColor: "black",
        borderTopWidth: 1,
    },
    ageContainer: {
        marginTop: 12,
    },
    text: {
        color: "white",
        backgroundColor: COLORS.LIGHT.headerBackground,
        padding: 10,
        borderRadius: 8,
        fontFamily: "Agdasima-Bold",
        fontSize: 26
    },
    nextBirthdayContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    nextBirtdayText: {
        color: "white",
        padding: 10,
        borderRadius: 8,
        backgroundColor: "black",
        fontFamily: "Agdasima-Bold",
        fontSize: 18
    },
    info: {
        color: "black",
        fontFamily: "Agdasima-Bold",
        marginBottom: 16,
        textAlign: "center",
        fontSize: 18
    },
    birthdayCountdown: {
        backgroundColor: "black",
        padding: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        marginTop: 12,
        marginBottom: -1
    },
    birthdayCountdownText: {
        color: "white",
        textAlign: "center",

    }
})