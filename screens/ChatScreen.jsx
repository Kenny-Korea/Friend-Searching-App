import { StyleSheet, Text, View } from "react-native";

const ChatScreen = () => {
  return (
    <View style={styles.ChatScreenContainer}>
      <Text>ChatScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    backgroundColor: "#fa9270",
  },
});

export default ChatScreen;
