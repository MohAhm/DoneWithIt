import React, { useEffect, useState } from 'react'
import { View, Button, Image, Text } from 'react-native'
import MessagesScreen from './app/screens/MessagesScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import Screen from './app/components/Screen'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const Link = () => {
	const navigation = useNavigation()

	return (
		<Button
			title='Click'
			onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
		/>
	)
}

const Tweets = ({ navigation }) => (
	<Screen>
		<Text>Tweets</Text>
		<Link />
	</Screen>
)

const TweetDetails = ({ route }) => (
	<Screen>
		<Text>Tweet Details {route.params.id}</Text>
	</Screen>
)

const Stack = createStackNavigator()
const StackNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerStyle: { backgroundColor: 'dodgerblue'},
			headerTintColor: 'white',
		}}
	>
		<Stack.Screen name='Tweets' component={Tweets} />
		<Stack.Screen
			name='TweetDetails'
			component={TweetDetails}
			options={({ route }) => ({ title: route.params.id })}
		/>
	</Stack.Navigator>
)

export default function App() {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	)
}

