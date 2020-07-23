import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { View } from 'react-native'
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import AccountScreen from './app/screens/AccountScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import Screen from './app/components/Screen'
import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker'

const categories = [
	{ label: 'Furniture', value: 1 },
	{ label: 'Clothing', value: 2 },
	{ label: 'Cameras', value: 3 },
]

export default function App() {
	const [category, setCategory] = useState(categories[0])

	return (
		// <WelcomeScreen />
		// <ViewImageScreen />
		// <ListingDetailsScreen />
		// <MessagesScreen />
		// <AccountScreen />
		// <ListingsScreen />

		<Screen>
			<AppPicker
				selectedItem={category}
				onSelectedItem={item => setCategory(item)}
				items={categories}
				placeholder='Category'
				icon='apps'
			/>

			<AppTextInput placeholder='Email' icon='email' />
		</Screen>
	)
}

