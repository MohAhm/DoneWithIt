import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import AccountScreen from './app/screens/AccountScreen'
import ListingsScreen from './app/screens/ListingsScreen'

export default function App() {
	return (
		// <WelcomeScreen />
		// <ViewImageScreen />
		// <ListingDetailsScreen />
		// <MessagesScreen />
		// <AccountScreen />
		<ListingsScreen />
	)
}

