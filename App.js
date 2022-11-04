import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import ChatScreen from "./screens/ChatScreen";
import FriendScreen from "./screens/FriendScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const Tab = createBottomTabNavigator();

  const [fontsLoaded] = useFonts({
    "nanum-gothic": require("./assets/fonts/NanumGothic-Regular.ttf"),
    "nanum-gothic-bold": require("./assets/fonts/NanumGothic-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="dark" />

      <LinearGradient colors={["#e1e1e1", "#e1b"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/friendship_background.jpeg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{ tabBarStyle: { backgroundColor: "pink" } }}
            >
              <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ title: "친구찾기" }}
              />
              <Tab.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={{ title: "채팅" }}
              />
              <Tab.Screen
                name="FriendScreen"
                component={FriendScreen}
                options={{ title: "친구목록" }}
              />
              <Tab.Screen
                name="FavoriteScreen"
                component={FavoriteScreen}
                options={{ title: "찜목록" }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    paddingTop: 12,
    fontFamily: "nanum-gothic",
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
