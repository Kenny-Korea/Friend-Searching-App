import { StyleSheet, Text, View } from "react-native";

// 매칭된 항목 보여주는 컴포넌트
const MatchingItemButton = () => {
  return (
    <View style={styles.MatchingItemButtonContainer}>
      <Text>MatchingItemButton</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  MatchingItemButtonContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MatchingItemButton;
