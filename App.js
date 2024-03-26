import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Containers/Auth/Login';
import Home from './Containers/Home';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
     
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login Page', headerTitleAlign:'center'}}
        />
         <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack