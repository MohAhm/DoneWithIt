import React, { useState } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import Screen from './Screen'
import AppText from './AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import PickerItem from './PickerItem'


export default function AppPicker({ selectedItem, onSelectedItem, items, placeholder, icon }) {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons
                        name={icon}
                        size={20}
                        color={colors.medium}
                        style={styles.icon}
                    />}

                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>

                    <MaterialCommunityIcons
                        name='chevron-down'
                        size={20}
                        color={colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button title='Close' onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => (
                            <PickerItem
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false)
                                    onSelectedItem(item)
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },

    icon: {
        marginRight: 10,
    },

    text: {
        flex: 1,
    },
})