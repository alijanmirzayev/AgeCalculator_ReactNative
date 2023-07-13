import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AgeFactsSvg from '../assets/Icons/AgeFactsSvg'
import SendSvg from '../assets/Icons/SendSvg'
import DotSvg from '../assets/Icons/DotSvg'
import { COLORS } from '../constants/Colors'

const AgeFactsDashboard = () => {
    return (
        <View style={styles.container}>

            <View style={styles.nameContainer}>
                <AgeFactsSvg />
                <Text style={styles.name}>Age Facts Dashboard</Text>
                <View style={styles.shareIcon}>
                    <SendSvg fill="white" />
                </View>
            </View>

            <View style={styles.divider} />

            <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
                <DotSvg fill={COLORS.LIGHT.headerBackground} />
                <Text style={styles.fact}>You were born on Monday.</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
                <DotSvg fill={COLORS.LIGHT.headerBackground} />
                <Text style={styles.fact}>Your Zodiac Sign is Leo.</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
                <DotSvg fill={COLORS.LIGHT.headerBackground} />
                <Text style={styles.fact}>Your Sleep Time is around 2 years.</Text>
            </View>

            <TouchableOpacity style={styles.ageAmazonFacts}>
                <Text style={styles.ageAmazonFactsText}>See Other Amazing Age Facts</Text>
            </TouchableOpacity>

        </View>
    )
}

export default AgeFactsDashboard

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
    fact: {
        color: "black",
        fontSize: 18,
        fontFamily: "Agdasima-Bold"
    },
    ageAmazonFacts: {
        backgroundColor: "black",
        padding: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        marginTop: 16,
        marginBottom: -1
    },
    ageAmazonFactsText: {
        color: "white",
        textAlign: "center",

    }
})