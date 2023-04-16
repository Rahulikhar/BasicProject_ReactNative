import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
const { height, width } = Dimensions.get('window')
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Register(props) {
    const [Mobile, setMobile] = useState('')
    const [MobileError, setMobileError] = useState('')
    const [Password, setPassword] = useState("")
    const [PasswordError, setPasswordError] = useState("")
    const [Name, setName] = useState("")
    const [NameError, setNameError] = useState("")

    const validateMobileNumber = (text) => {
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
    const validateName = (text) => {
        const passReg = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
        if (text == "" || text == undefined || text == null) {
            setNameError("Enter your name!")
            return false
        }
        else if (!passReg.test(text)) {
            setNameError("Enter your name!")
            return false
        } else {
            setNameError("")
            return true
        }
    }
    const submit = () => {
        if (validateMobileNumber(Mobile) && validatePassword(Password) && validateName(Name)) {
            AsyncStorage.setItem("LoginCredientional", JSON.stringify({ Mobile: Mobile, Password: Password, Name:Name }))
            props.navigation.navigate("RegisterOTP")
        } else {
            validatePassword(Password)
            validateName(Name)
        }
    }

    return (
        <ScrollView style={style.mainConatiner} >
            <View style={style.HeadingContainer}>
                <Text style={[style.HeadingText, { fontWeight: '700' }]}>Create Account</Text>
                {/* <Text style={[style.HeadingText, { fontSize: 18 }]}>Login to continue</Text> */}
            </View>
            <View style={style.inputContainer} >
                <Text style={style.inputText}>Name</Text>
                <TextInput
                    placeholder='Enter your name'
                    placeholderTextColor={"grey"}
                    style={style.inputField}
                    maxLength={256}
                    onChangeText={(text) => {
                        setName(text)
                        validateName(text)
                    }}
                    value={Name}

                />
                <Text style={style.Errortxt}>{NameError}</Text>
            </View>
            <View style={{ marginTop: height * 0.01 }}>
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
            <View style={{ marginTop: height * 0.01 }}>
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
                    submit()
                }}
            >
                <Text style={style.LoginText}>Register</Text>
            </TouchableOpacity>
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
    }
})