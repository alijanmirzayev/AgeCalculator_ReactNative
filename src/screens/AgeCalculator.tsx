import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import LeftArrowSvg from '../assets/Icons/LeftArrowSvg'
import ShareSvg from '../assets/Icons/ShareSvg'
import AgeDashboard from '../components/AgeDashboard'
import { COLORS } from '../constants/Colors'
import NextBirthdayDasboard from '../components/NextBirthdayDasboard'
import AgeFactsDashboard from '../components/AgeFactsDashboard'

const AgeCalculator = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>

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

      {/* Header Text
      <View style={styles.inputContainer}>
        <Input placeholder="Enter the Name: John" icon={<NameSvg />}/>
      </View> */}

      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 2}}>

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

      </ScrollView>

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
  }
})