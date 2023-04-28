import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'

export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("Login")
    }, 3000)
  }, [])

  return (

    <View style={style.mainContainer}>
      <Image source={require('../Assets/Images/Logo.png')}
        style={style.logo}
      />
      <Text
        style={style.Logotext}
      >Welcome</Text>
    </View>
  )
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 400,
    width: 500,
    // backgroundColor:'red'
  },
  Logotext: {
    fontSize: 25,
    fontWeight: '500',
    color: '#000'
  }
})