import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import Card from './app/components/Card'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'

export default function App() {
	return (
		// <WelcomeScreen />
		// <ViewImageScreen />
		// <ListingDetailsScreen />
		<MessagesScreen />
	)
}

