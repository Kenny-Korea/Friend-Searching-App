import { StyleSheet, Text, View } from "react-native";

const MyPageListItem = ({ myPageItem }) => {
  return (
    <View style={styles.MyPageListItemContainer}>
      <Text>{myPageItem}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  MyPageListItemContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyPageListItem;
