import React, { useState } from 'react'
import { FlatList } from 'react-native'
import ListItem from '../components/lists/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/lists/ListItemSeparator'
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction'


const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    },
]

export default function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        // Delete the message from messages
        setMessages(messages.filter(m => m.id !== message.id))

        // Call the server
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        onPress={() => console.log('Message selected!', item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        )}
                    />
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 3,
                            title: 'T3',
                            description: 'D3',
                            image: require('../assets/mosh.jpg')
                        },
                    ])
                }}
            />
        </Screen>
    )
}