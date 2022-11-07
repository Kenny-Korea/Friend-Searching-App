import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import MyPageScreen from "./screens/MyPageScreen";
import ChatScreen from "./screens/ChatScreen";
import FriendScreen from "./screens/FriendScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Colors from "./constants/colors";
import AppText from "./components/common/AppText";

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
      <NavigationContainer>
        {/* <LinearGradient colors={["#e1e1e1", "#e1b"]} style={styles.rootScreen}>
          <ImageBackground
            source={require("./assets/images/friendship_background.jpeg")}
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}
          > */}
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
          }}
        >
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="home-outline"
                  color={Colors.primary}
                  size={24}
                />
              ),
              title: "친구 찾기",
            }}
          />
          <Tab.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="chatbubbles-outline"
                  color={Colors.primary}
                  size={24}
                />
              ),
              title: "채팅",
            }}
          />
          <Tab.Screen
            name="FriendScreen"
            component={FriendScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="people-outline"
                  color={Colors.primary}
                  size={24}
                />
              ),
              title: "내 친구",
              // headerTitleStyle: {
              //   color: Colors.primary,
              // },
            }}
          />
          <Tab.Screen
            name="MyPageScreen"
            component={MyPageScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="grid-outline"
                  color={Colors.primary}
                  size={24}
                />
              ),
              title: "마이페이지",
            }}
          />
        </Tab.Navigator>
        {/* </ImageBackground>
        </LinearGradient> */}
      </NavigationContainer>
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
