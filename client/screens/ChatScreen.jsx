import { FlatList, StyleSheet, TextInput, View } from "react-native";
import FriendListItem from "../components/FriendListItem";
import { Ionicons } from "@expo/vector-icons";

const ChatScreen = () => {
  const dummyFriend = [1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5];
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.topContainer}>
          <TextInput style={styles.textInput} placeholder="검색" />
          <Ionicons name="search" color="black" size={20} />
        </View>
        <FlatList
          style={styles.rootContainer}
          data={dummyFriend}
          renderItem={(itemData) => <FriendListItem />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    height: 40,
    // backgroundColor: "red",
    borderColor: "black",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#ddd",
    borderBottomColor: "black",
    borderWidth: 1,
    borderColor: "black",
    paddingLeft: 10,
  },
  rootContainer: {
    flex: 1,
    // backgroundColor: "blue",
  },
});

export default ChatScreen;
