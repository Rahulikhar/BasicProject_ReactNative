import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
const { height, width } = Dimensions.get('window')
import AntDesign from "react-native-vector-icons/AntDesign"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from 'react-native-flash-message';

export default function Login(props) {
    const [Mobile, setMobile] = useState('')
    const [MobileError, setMobileError] = useState('')
    const [Password, setPassword] = useState("")
    const [PasswordError, setPasswordError] = useState("")

    const validateMobileNumber = async (text) => {
        const reg = /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/

        if (text == "" || text == undefined || text == null) {
            setMobileError("Enter mobile number!")
            return false
        }
        else if (text.length < 10) {
            setMobileError("Enter mobile number!")
            return false
        }
        else if (!reg.test(text)) {
            setMobileError("Enter mobile number!")
            return false
        } else {
            setMobileError("")
            return true
        }
    }
    const validatePassword = (text) => {
        const passReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
        if (text == "" || text == undefined || text == null) {
            setPasswordError("Enter your password!")
            return false
        }
        else if (!passReg.test(text)) {
            setPasswordError("Enter your password!")
            return false
        } else {
            setPasswordError("")
            return true
        }
    }

    const validcredientional = async () => {
        const value = await AsyncStorage.getItem("LoginCredientional")
        if (value) {
            var LoginCredientional = JSON.parse(value)
            if (LoginCredientional.Mobile == Mobile && LoginCredientional.Password == Password) {
                submit()
            } else {
                showMessage({
                    type: 'warning',
                    icon: 'warning',
                    message: 'User not found'
                })
            }
        }
    }

    const submit = async () => {
        if (validateMobileNumber(Mobile) && validatePassword(Password)) {
            showMessage({
                type: 'success',
                icon: 'success',
                message: 'Login sucessfully'
            })
            props.navigation.navigate("LoginOTP")
        } else {
            validatePassword(Password)
        }
    }

    return (
        <ScrollView style={style.mainConatiner} >
            <View style={style.HeadingContainer}>
                <Text style={[style.HeadingText, { fontWeight: '700' }]}>Welcome Back!</Text>
                <Text style={[style.HeadingText, { fontSize: 18 }]}>Login to continue</Text>
            </View>
            {/* <AntDesign name="down" color='red' size={20} />00 */}
            <View style={style.inputContainer}>
                <Text style={style.inputText}>Mobile number</Text>
                <TextInput
                    placeholder='Enter mobile number'
                    placeholderTextColor={"grey"}
                    style={style.inputField}
                    maxLength={10}
                    onChangeText={(text) => {
                        setMobile(text)
                        validateMobileNumber(text)
                    }}
                    value={Mobile}
                />
                <Text style={style.Errortxt}>{MobileError}</Text>
            </View>
            <View style={{ marginTop: height * 0.03 }}>
                <Text style={style.inputText}>Password</Text>
                <TextInput
                    placeholder='Enter password'
                    placeholderTextColor={"grey"}
                    style={style.inputField}
                    maxLength={16}
                    onChangeText={(text) => {
                        setPassword(text)
                        validatePassword(text)
                    }}
                    value={Password}

                />
                <Text style={style.Errortxt}>{PasswordError}</Text>
            </View>
            <TouchableOpacity style={style.ForgetBTN} activeOpacity={0.9}>
                <Text style={style.forgetText}>Forget Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.LoginBTN} activeOpacity={0.9}
                onPress={() => {
                    validcredientional()
                }}
            >
                <Text style={style.LoginText}>Login</Text>
            </TouchableOpacity>
            <View style={style.footer}>
                <Text style={style.resendtxt}>Dont't have an account?</Text>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('Register')

                    }}
                >
                    <Text style={[style.resendtxt, { color: 'blue' }]}> Register</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    mainConatiner: {
        flex: 1,
        backgroundColor: '#fff'
    },
    HeadingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.2

    },
    HeadingText: {
        fontSize: 30,
        color: '#000'
    },
    inputField: {
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 7,
        width: width * 0.9,
        alignSelf: 'center',
        paddingLeft: 10
    },
    inputText: {
        marginLeft: width * 0.05,
        fontSize: 14,
        color: '#000',
        marginBottom: 5
    },
    ForgetBTN: {
        alignSelf: 'center',
        marginTop: height * 0.05
    },
    LoginBTN: {
        backgroundColor: '#000',
        width: width * 0.9,
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: height * 0.05
    },
    forgetText: {
        fontSize: 14,
        color: '#000'
    },
    LoginText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        padding: 15
    },
    inputContainer: {
        marginTop: height * 0.05
    },
    Errortxt: {
        fontSize: 14,
        color: 'red',
        marginLeft: width * 0.05
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '5%'
    },
    resendtxt: {
        fontSize: 12,
        color: 'grey',
        fontFamily: 'Poppins-Regular'
    },

})