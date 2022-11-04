import { StyleSheet, Text, View } from "react-native";

const FavoriteScreen = () => {
  return (
    <View style={styles.FavoriteScreenContainer}>
      <Text>FavoriteScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  FavoriteScreenContainer: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavoriteScreen;
