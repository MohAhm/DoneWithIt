import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	SafeAreaView,
	Image,
	Alert,
	Button,
	Platform
} from 'react-native'


export default function App() {
	const handlePress = () => console.log("It pressed")

	return (
		<SafeAreaView style={styles.container}>
			<Text onPress={handlePress}>Hello World!</Text>
			<TouchableOpacity onPress={handlePress}>
				<Image source={{
					width: 200,
					height: 300,
					uri: "https://picsum.photos/200/300"
				}} />
			</TouchableOpacity>

			{/* <Image source={require("./assets/icon.png")} /> */}

			<Button
				title="Click Me"
				onPress={() => Alert.alert("My Title", "My Message", [
					{text: "Yes", onPress: () => console.log("Yes")},
					{text: "No", onPress: () => console.log("No")}
				])} />
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: "center",
		alignItems: "center",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
	},
});
