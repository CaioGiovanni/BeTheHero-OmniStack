import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/incidents';
import Details from './pages/detail';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={ {headerShown: false} }>
                <AppStack.Screen name="Incidents" component={Incidents}></AppStack.Screen>
                <AppStack.Screen name="Detail" component={Details}></AppStack.Screen>
            </AppStack.Navigator>

        </NavigationContainer>
    );
}