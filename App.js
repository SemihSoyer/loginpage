import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome} from "./screens";


const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      
      <Stack.Navigator
        initialRouteName='Welcome'
      >
         <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
       
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
          
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
