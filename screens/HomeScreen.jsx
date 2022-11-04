import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.HomeScreenContainer}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HomeScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
