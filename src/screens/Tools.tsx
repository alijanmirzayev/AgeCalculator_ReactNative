import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'
import SettingSvg from '../assets/Icons/SettingSvg'
import DateInput from '../components/DateInput'
import Button from '../components/Button'

const Tools = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>

      {/* Header Text */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Age Calculator</Text>
        <View style={styles.settingIcon}>
          <SettingSvg fill="white" />
        </View>
      </View>

      {/* Date Selector */}
      <View style={styles.dateSelecetorContainer}>
        <DateInput title="Current Date" initalText="21-04-2023" />
        <DateInput title="Date of Birth" initalText="DD-MM-YYYY" />
      </View>

      {/* Calculate Button */}
      <View style={styles.btnContainer}>
        <Button title="CALCULATE AGE" backgroundColor={COLORS.LIGHT.button} fontSize={22} handle={() => navigation.navigate("AgeCalculator")}/>
      </View>

      {/* Saved Birthdays Dashboard Banner */}
      

    </SafeAreaView>
  )
}

export default Tools

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT.background
  },
  headerContainer: {
    backgroundColor: COLORS.LIGHT.headerBackground,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    color: COLORS.LIGHT.headerText,
    fontFamily: "Agdasima-Bold",
    fontSize: 28,
    textAlign: "center",
  },
  settingIcon: {
    position: "absolute",
    right: 20,
    top: 20
  },
  dateSelecetorContainer: {
    backgroundColor: COLORS.LIGHT.headerBackground,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomEndRadius: 12,
    borderBottomLeftRadius: 12
  },
  btnContainer: {
    marginHorizontal: 16,
    marginVertical: 12
  }
})