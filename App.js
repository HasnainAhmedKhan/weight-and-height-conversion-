import React from 'react';
import { ConversionProvider } from './src/contexts/ConversionContext';
import HooksTab from './src/screens/HooksTab';
import MobxTab from './src/screens/MobxTab';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ConversionProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false, 
            tabBarActiveTintColor: 'white', 
            tabBarInactiveTintColor: 'black', 
            tabBarStyle: { backgroundColor: 'green' , color: 'white'}, 
          }}
        >
          <Tab.Screen name="Hooks" component={HooksTab} />
          <Tab.Screen name="MobX" component={MobxTab} />
        </Tab.Navigator>
      </NavigationContainer>
    </ConversionProvider>
  );
};

export default App;
