import { StyleSheet, Text, View } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.LoginScreenContainer}>
      <Text>LoginScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  LoginScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
