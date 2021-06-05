import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  NavigationProp,
  ParamListBase,
  Route,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import { Home } from '../screens/home';
import { Detail } from '../screens/detail';
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

type StackNavigationProps = {
  route: Route<string>;
  navigation: NavigationProp<ParamListBase>;
};

type RouteProps = 'Home' | 'Libraries' | 'Profile';

function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ header: () => null }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
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
              tabBarVisible: focusedRoute === 'Detail' ? false : true,
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
