import { StyleSheet, Text, View } from "react-native";

const SignUpScreen = () => {
  return (
    <View style={styles.SignUpScreenContainer}>
      <Text>SignUpScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  SignUpScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignUpScreen;
