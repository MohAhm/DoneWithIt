import React from 'react'
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import AppText from './AppText'
import colors from '../config/colors'

export default function ListItem({ title, description, image, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}
            >
                <View style={styles.container}>
                    <Image style={styles.image} source={image}/>

                    <View>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.description}>{description}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },

    title: {
        fontWeight: '500',
    },

    description: {
        color: colors.medium,
    },
})