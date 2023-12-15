
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './RegisterScreen';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

          <Stack.Screen name="Register" component={RegisterScreen} />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
