import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

// 유저 설명해주는 컴포넌트
const DescriptionButton = ({ children }) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginRight: 10,
    marginVertical: 8,
    flexDirection: "row",
    backgroundColor: Colors.buttonSmall,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    // 텍스트 크기에 맞게 width를 주고 싶었는데, 아래 alignSelf를 통해 해결함
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "nanum-gothic-bold",
  },
});

export default DescriptionButton;
