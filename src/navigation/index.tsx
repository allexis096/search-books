import 'react-native-gesture-handler';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import { Home } from '../screens/home';
import { Detail } from '../screens/detail';
import { Browser } from '../screens/browser';
import { Profile } from '../screens/profile';
import { Libraries } from '../screens/libraries';

import theme from '../styles/theme';
import { Search } from '../screens/search';

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

function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerTitle: 'More books' }}
      />
      <Stack.Screen name="Browser" component={Browser} />
    </Stack.Navigator>
  );
}

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
        <Tab.Screen
          name="Home"
          component={StackNavigation}
          options={(navigation) => {
            const focusedRoute = getFocusedRouteNameFromRoute(navigation.route);

            return {
              tabBarVisible:
                focusedRoute === 'Detail' || 'Browser' ? false : true,
            };
          }}
        />
        <Tab.Screen name="Libraries" component={Libraries} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export { Navigation };
