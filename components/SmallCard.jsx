import { StyleSheet, Text, View } from "react-native";

const SmallCard = () => {
  return (
    <View style={styles.SmallCardContainer}>
      <Text>SmallCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  SmallCardContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SmallCard;
