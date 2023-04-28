import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
const { height, width } = Dimensions.get('window')
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StoreData } from '../Context/ManageData';
import { useSelector, useDispatch } from 'react-redux';
import store from '../Redux/Store';


export default function Home(props) {

    const EditData = useContext(StoreData)

    const Dispatch = useDispatch()
    const user = useSelector(state => state.eventsReducer)

    console.log(user?.CoinsListAPI[0]?.employee_age, "klllklklkllk")


    const data = [
        { img: require("../Assets/Images/img1.jpeg") },
        { img: require("../Assets/Images/img2.jpeg") },
        { img: require("../Assets/Images/img3.jpeg") },
        { img: require("../Assets/Images/img4.jpeg") },
        { img: require("../Assets/Images/img5.jpeg") },
        { img: require("../Assets/Images/img6.jpeg") },
        { img: require("../Assets/Images/img1.jpeg") },
        { img: require("../Assets/Images/img2.jpeg") },
        { img: require("../Assets/Images/img3.jpeg") },
        { img: require("../Assets/Images/img4.jpeg") },
        { img: require("../Assets/Images/img5.jpeg") },
        { img: require("../Assets/Images/img6.jpeg") },
    ]

    const [Name, setName] = useState({})
    const getName = async () => {
        const value = await AsyncStorage.getItem("LoginCredientional")
        var logincredientional = JSON.parse(value)
        setName(logincredientional)
    }

    useEffect(() => {
        getName()
        setTimeout(() => {
            console.log(EditData.first, "llllllll")
        }, 500);
    }, [])


    return (
        <View>
            <View style={styles.HeaderContainer}>
                <View style={styles.userContainer}>
                    <FontAwesome5 name="user-circle" size={30} color="#000" />
                    <Text style={styles.userTXT}>{Name?.Name || ""}</Text>
                </View>
                <FontAwesome5 name="bell" size={30} color="#000" />
            </View>
            <View style={styles.mainContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.imgContainer}>
                                <Image source={item.img} style={styles.img} />
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    img: {
        height: 170,
        width: width * 0.9,
        alignSelf: 'center',
        overflow: 'hidden',
        borderRadius: 7,
        marginBottom: '5%',
    },
    imgContainer: {
        width: width * 0.9,
        alignSelf: 'center',



    },
    mainContainer: {
        // backgroundColor: 'red',
        height: '91%',
        marginTop: '5%'
    }
})