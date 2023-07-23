import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import DateSvg from '../assets/Icons/DateSvg'
import { COLORS } from '../constants/Colors'
import { dateConverter } from '../helpers/dateConverter'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux'
import { updateCurrentDate, updateDateOfBirth } from '../redux/Slices/DateSlice'
import moment from 'moment'

const DateInput = ({ title, initalText, change }: any) => {

    const dispatch = useDispatch<AppDispatch>();

    const [text, setText] = useState<string | null>(initalText)
    const [date, setDate] = useState<Date>(new Date())
    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
            <Text style={styles.title}>{title}</Text>
            {
                change ? <>
                    <TouchableOpacity style={styles.btn} onPress={() => setOpen(true)}>
                        <Text style={styles.btnText}>{text}</Text>
                        <DateSvg />
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        mode="date"
                        theme='light'
                        maximumDate={new Date()}
                        minimumDate={new Date("1961-01-01")}
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setText(dateConverter(date))
                            if (title == "Current Date") {
                                dispatch(updateCurrentDate(date.toISOString()))
                                return
                            }
                            if (title == "Date of Birth") {
                                dispatch(updateDateOfBirth(date.toISOString()))
                                return
                            }
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </> : <View style={styles.btn}>
                    <Text style={styles.btnText}>{text}</Text>
                    <DateSvg />
                </View>
            }
        </>
    )
}

export default DateInput

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "white",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
    btnText: {
        color: "black",
        fontSize: 18,
        fontFamily: "Agdasima-Bold"
    },
    title: {
        color: COLORS.LIGHT.headerText,
        fontFamily: "Agdasima-Bold",
        fontSize: 18,
        marginLeft: 8,
        marginBottom: 6
    }
})