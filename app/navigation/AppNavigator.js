import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import FeedNavigator from './FeedNavigator'
import ListingEditScreen from '../screens/ListingEditScreen'
import AccountNavigator from './AccountNavigator'
import NewListingButton from './NewListingButton'
import routes from './routes'

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            name={routes.FEED}
            component={FeedNavigator}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name='home'
                        color={color}
                        size={size}
                    />
                )
            }}
        />
        <Tab.Screen
            name={routes.LISTINGEDIT}
            component={ListingEditScreen}
            options={({ navigation}) => ({
                tabBarButton: () => (
                    <NewListingButton onPress={() => navigation.navigate(routes.LISTINGEDIT)}/>
                ),
            })}
        />
        <Tab.Screen
            name={routes.ACCOUNT}
            component={AccountNavigator}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name='account'
                        color={color}
                        size={size}
                    />
                )
            }}
        />
    </Tab.Navigator>
)

export default AppNavigator