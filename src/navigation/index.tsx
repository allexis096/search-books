import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import { Home } from '../screens/home';
import { Libraries } from '../screens/libraries';
import { Profile } from '../screens/profile';
import theme from '../styles/theme';

const icons = {
  Home: {
    icon: Feather,
    name: 'home' as 'home',
  },
  Libraries: {
    icon: Feather,
    name: 'book' as 'book',
  },
  Profile: {
    icon: Feather,
    name: 'user' as 'user',
  },
};

type RouteProps = 'Home' | 'Libraries' | 'Profile';

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ size, color }) => {
            const namedRoutes = route.name as RouteProps;
            const { icon: Icon, name } = icons[namedRoutes];

            return <Icon name={name} color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: theme.colors.black,
          inactiveTintColor: theme.colors.white200,
          labelPosition: 'below-icon',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Libraries" component={Libraries} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export { Navigation };
