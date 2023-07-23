import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LeftArrowSvg from '../assets/Icons/LeftArrowSvg'
import ShareSvg from '../assets/Icons/ShareSvg'
import AgeDashboard from '../components/AgeDashboard'
import AgeFactsDashboard from '../components/AgeFactsDashboard'
import NextBirthdayDasboard from '../components/NextBirthdayDasboard'
import SaveAge from '../components/SaveAge'
import { COLORS } from '../constants/Colors'

const AgeCalculator = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        {/* Header Text */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Age Calculator</Text>
          <TouchableOpacity style={styles.settingIcon}>
            <ShareSvg fill="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.saveIcon}>
            <LeftArrowSvg fill="white" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 2 }}>

          {/* Age Dashboard */}
          <View style={styles.ageDashboard}>
            <AgeDashboard totalCount={true} />
          </View>

          {/* Next Birthday Dashboard */}
          <View style={styles.nextBirtdayDashboard}>
            <NextBirthdayDasboard />
          </View>

          {/* Age Facts Dashboard */}
          <View style={styles.ageFactsDashboard}>
            <AgeFactsDashboard />
          </View>

          {/* Age Save */}
          <View style={styles.saveContainer}>
            <SaveAge />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default AgeCalculator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT.headerBackground
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
  saveIcon: {
    position: "absolute",
    left: 20,
    top: 17
  },
  ageDashboard: {
    marginHorizontal: 16,
    marginTop: 12,
  },
  inputContainer: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginVertical: 14,
  },
  nextBirtdayDashboard: {
    marginHorizontal: 16,
    marginTop: 18,
  },
  ageFactsDashboard: {
    marginHorizontal: 16,
    marginTop: 18,
  },
  saveContainer: {
    marginHorizontal: 16,
    marginTop: 18,
  }
})