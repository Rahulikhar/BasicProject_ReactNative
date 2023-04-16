import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Screens/Home';
import Setting from '../Screens/Setting';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (

        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route, }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                    } else if (route.name === 'Setting') {
                        iconName = focused ? 'settings' : 'settings';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen name="Setting" component={Setting}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>

    )
}