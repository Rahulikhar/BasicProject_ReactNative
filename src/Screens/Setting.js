import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function Setting(props) {
    const [Name, setName] = useState({})
    const getName = async () => {
        const value = await AsyncStorage.getItem("LoginCredientional")
        var logincredientional = JSON.parse(value)
        setName(logincredientional)
    }

    useEffect(() => {
        getName()
    }, [])

    return (
        <View>
            <View style={style.HeaderContainer}>
                <View style={style.userContainer}>
                    <FontAwesome5 name="user-circle" size={30} color="#000" />
                    <Text style={style.userTXT}>{Name.Name || ""}</Text>
                </View>
                <FontAwesome5 name="bell" size={30} color="#000" />
            </View>
            <View style={style.txtContainer}>
                <Text style={style.txt}>Profile</Text>
                <Text style={style.txt}>FAQ</Text>
                <Text style={style.txt}>About Us</Text>
                <Text style={style.txt}>Terms And Conditions</Text>
                <Text style={style.txt}>Privacy Policy</Text>
                <Text style={style.txt}>Refern And Earn</Text>
                <TouchableOpacity onPress={() => {
                    props.navigation.replace("Login")
                }}>
                    <Text style={style.txt}>Log out</Text>

                </TouchableOpacity>

            </View>

        </View>
    )
}

const style = StyleSheet.create({
    txt: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: '#000',
        marginTop: '5%',
        borderBottomWidth: 1,
        paddingLeft: '5%'
    },
    HeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        marginTop: '5%'
    },
    userTXT: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        marginLeft: '5%',
        color: '#000'
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

})