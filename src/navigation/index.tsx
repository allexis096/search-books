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
import { WelcomeScreen } from '../screens/welcome';

import theme from '../styles/theme';
import { Search } from '../screens/search';
import { useBooks } from '../hooks/useBooks';

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
    <Stack.Navigator initialRouteName="Welcome">
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
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const { name } = useBooks();

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

            if (!focusedRoute) {
              return {
                tabBarVisible: false,
              };
            }

            return {
              tabBarVisible: focusedRoute === 'Home' ? true : false,
            };
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate('Home');
            },
          })}
        />
        <Tab.Screen name="Libraries" component={Libraries} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export { Navigation };
