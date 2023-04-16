import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import AntDesign from "react-native-vector-icons/AntDesign"
const { height, width } = Dimensions.get('window')

export default function LoginOTP(props) {
    const [OTP, setOTP] = useState('')
    const [OTPError, setOTPError] = useState("")

    const validateOTP = (txt) => {
        if (txt.length < 4) {
            setOTPError("Enter valid otp!")
            return false
        }
        else if (txt == "" || txt == null || txt == undefined) {
            setOTPError("Enter valid otp!")
            return false
        } else {
            setOTPError("")
            return true
        }
    }

    const SubmitOTP = () => {
        if (validateOTP(OTP)) {
            props.navigation.navigate("BottomTabNavigator", { screens: "Home" })
        }
    }

    return (
        <View>
            <View style={styles.headerContainer}>
                <AntDesign name="leftsquare" size={30} color="#000" onPress={() => {
                    props.navigation.goBack()
                }} />
                <Text style={styles.headerTXT}>Login OTP</Text>
            </View>


            <Text style={styles.txt}>Enter your OTP</Text>
            <OTPInputView
                style={{ width: '90%', height: 80, alignSelf: 'center', }}
                pinCount={4}
                code={OTP} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                onCodeChanged={code => {
                    setOTP(code)
                    validateOTP(code)
                }}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
            // onCodeFilled={(code => {
            //     console.log(`Code is ${code}, you are good to go!`)
            // })}
            />
            <Text style={styles.ErrorTXT}>{OTPError}</Text>

            <View style={styles.ResendContainer}>
                <Text style={styles.resendtxt}>Didn't recieve an phone number?</Text>
                <TouchableOpacity>
                    <Text style={[styles.resendtxt, { color: 'blue' }]}> Resend</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.LoginBTN} activeOpacity={0.9}
                onPress={() => {
                    SubmitOTP()
                }}
            >
                <Text style={styles.LoginText}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    borderStyleBase: {
        width: 40,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#000",
    },

    underlineStyleBase: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderBottomWidth: 1,
        color: '#000',
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center'
    },

    underlineStyleHighLighted: {
        borderColor: "#000",

    },
    headerTXT: {
        fontSize: 25,
        color: '#000',
        fontFamily: 'Poppins-Regular',
        marginLeft: '5%'

    },
    txt: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        marginLeft: '5%',
        marginTop: '30%',
        color: 'grey'

    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        marginTop: '5%'
    },
    resendtxt: {
        fontSize: 12,
        color: 'grey',
        fontFamily: 'Poppins-Regular'
    },
    ResendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '10%'
    },
    LoginBTN: {
        backgroundColor: '#000',
        width: width * 0.9,
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: height * 0.05
    },

    LoginText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        padding: 15
    },
    ErrorTXT: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: 'red',
        marginLeft: '5%'
    }
});