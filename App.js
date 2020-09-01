import React, { useEffect, useState } from 'react'
import { View, Button, Image, Text } from 'react-native'
import MessagesScreen from './app/screens/MessagesScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import Screen from './app/components/Screen'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native'


import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator'


export default function App() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<AppNavigator />
		</NavigationContainer>
	)
}

