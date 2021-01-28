import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';
import Store from '../redux/store';

const Stack = createStackNavigator();

//Start Screens
import {Initial, Home, Questions, Final} from '../screens';
//End Screens
import {noHeader, Header} from '../components/header';

export default function Route() {
  return (
      <Provider store={Store}>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Initial" component={Initial} options={noHeader} />
          <Stack.Screen name="Home" component={Home} options={noHeader} />
          <Stack.Screen
            name="Questions"
            component={Questions}
            options={Header}
          />
          <Stack.Screen name="Final" component={Final} options={Header} />
        </Stack.Navigator>
    </NavigationContainer>
      </Provider>
  );
}
