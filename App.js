import React, { useEffect, useState } from 'react'
import { View, Button, Image } from 'react-native'
import MessagesScreen from './app/screens/MessagesScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import Screen from './app/components/Screen'

import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import ImageInput from './app/components/ImageInput'


export default function App() {
	const [imageUri, setImageUri] = useState()

	const requestPermission = async () => {
		// const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)
		const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()

		if (!granted)
			alert('You need to enable permission to access the library.')
	}

	useEffect(() => {
		requestPermission()
	}, [])

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync()

			if (!result.cancelled)
				setImageUri(result.uri)
		} catch (error) {
			console.log('Error reading an image', error)
		}
	}

	return (
		<Screen>
			<ImageInput
				imageUri={imageUri}
				onChangeImage={uri => setImageUri(uri)}
			/>
		</Screen>
	)
}

