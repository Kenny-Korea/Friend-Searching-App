import { StyleSheet, Text, View } from "react-native";

const LargeCard = () => {
  return (
    <View style={styles.LargeCardContainer}>
      <Text>LargeCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  LargeCardContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LargeCard;
