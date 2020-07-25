import React from 'react'
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import AppText from '../AppText'
import colors from '../../config/colors'

export default function ListItem({
    title,
    description,
    image,
    IconComponent,
    onPress,
    renderRightActions
}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}
            >
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image}/>}

                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {description && <AppText style={styles.description}>{description}</AppText>}
                    </View>

                    <MaterialCommunityIcons color={colors.medium} name='chevron-right' size={25} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: colors.white,
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },

    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },

    title: {
        fontWeight: '500',
    },

    description: {
        color: colors.medium,
    },
})
