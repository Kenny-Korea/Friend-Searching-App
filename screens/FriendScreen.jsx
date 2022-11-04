import { StyleSheet, Text, View } from "react-native";

const FriendScreen = () => {
  return (
    <View style={styles.FriendScreenContainer}>
      <Text>FriendScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  FriendScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FriendScreen;
