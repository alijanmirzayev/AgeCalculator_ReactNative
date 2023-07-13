import React from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SaveSvg from '../assets/Icons/SaveSvg'
import SettingSvg from '../assets/Icons/SettingSvg'
import Button from '../components/Button'
import DateInput from '../components/DateInput'
import Tool from '../components/Tool'
import { COLORS } from '../constants/Colors'
import { TOOLS } from '../datas/Tools'
import { dateConverter } from '../helpers/dateConverter'

const Tools = ({ navigation }: any) => {

  return (
    <SafeAreaView style={styles.container}>

      {/* Header Text */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Age Calculator</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={styles.settingIcon}>
          <SettingSvg fill="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Favorites")} style={styles.saveIcon}>
          <SaveSvg fill="white" />
        </TouchableOpacity>
      </View>

      {/* Date Selector */}
      <View style={styles.dateSelecetorContainer}>
        <DateInput title="Current Date" initalText={dateConverter(new Date())}/>
        <DateInput title="Date of Birth" initalText="DD/MM/YYYY"/>
      </View>

      {/* Calculate Button */}
      <View style={styles.btnContainer}>
        <Button title="CALCULATE AGE" backgroundColor={COLORS.LIGHT.button} fontSize={22} handle={() => navigation.navigate("AgeCalculator")} />
      </View>

      {/* Ads Banner */}
      <View style={styles.adsBanner}>
        <Text style={styles.adsText}>Advertising</Text>
        <Image style={{width: "100%", height: 90, resizeMode: "stretch"}} source={{uri: "https://theonlineadvertisingguide.com/wp-content/uploads/2019/04/Gls_320x50.png"}} />
      </View>

      {/* All Tools */}
      <FlatList 
        data={TOOLS}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Tool item={item} />}
      />

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
  saveIcon: {
    position: "absolute",
    left: 20,
    top: 17
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
  },
  adsBanner: {
    marginHorizontal: 12,
    maxHeight: 90,
    marginBottom: 22
  },
  adsText: {
    textAlign: "center",
    fontSize: 14,
    color: COLORS.LIGHT.button,
    fontFamily: "Agdasima-Regular",
    marginBottom: 4
  }
})