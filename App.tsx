import React from "react";
import Amplify from "aws-amplify";
import awsconfig from "./src/aws-exports";
import SplashScreen from "./src/screens/splash/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Linking, Platform } from "react-native";
import Login from "./src/screens/login/Login";
import Home from "./src/screens/home/Home";
import * as WebBrowser from "expo-web-browser";



// async function urlOpener(url: string, redirectUrl: string) {
//   const { type, url: newUrl } = (await WebBrowser.openAuthSessionAsync(
//     url,
//     redirectUrl
//   )) as WebBrowser.WebBrowserRedirectResult;

//   if (type === "success" && Platform.OS === "ios") {
//     WebBrowser.dismissBrowser();
//     return Linking.openURL(newUrl);
//   }
// }

Amplify.configure(awsconfig);

// Amplify.configure({
//   ...awsconfig,
//   oauth: {
//     ...awsconfig.oauth,
//     urlOpener,
//   },
// });
const Stack = createStackNavigator();

export enum Screens {
  SPLASH = "SPLASH",
  LOGIN = "LOGIN",
  HOME = "HOME",
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={Screens.SPLASH}
          component={SplashScreen}
          options={horizontalAnimation}
        />

        <Stack.Screen
          name={Screens.LOGIN}
          component={Login}
          options={horizontalAnimation}
        />

        <Stack.Screen
          name={Screens.HOME}
          component={Home}
          options={horizontalAnimation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const horizontalAnimation = {
  cardStyleInterpolator: ({ current, layouts }: any) => {
    return {
      cardStyle: {
        backgroundColor: "#303846",
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
