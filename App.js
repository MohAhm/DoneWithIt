import React, { useEffect, useState } from 'react'
import { View, Button, Image } from 'react-native'
import MessagesScreen from './app/screens/MessagesScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import Screen from './app/components/Screen'

import ImageInputList from './app/components/ImageInputList'


export default function App() {
	const [imageUris, setImageUris] = useState([])

	const handleAdd = uri => {
		setImageUris([...imageUris, uri])
	}

	const handleRemove = uri => {
		setImageUris(imageUris.filter(imageUri => imageUri !== uri))
	}

	return (
		<Screen>
			<ImageInputList
				imageUris={imageUris}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>
		</Screen>
	)
}

