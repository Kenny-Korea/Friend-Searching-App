import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import FriendListItem from "../components/FriendListItem";
import { Ionicons } from "@expo/vector-icons";

const FriendScreen = () => {
  const dummyFriend = [1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5];
  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            // autoFocus
            // borderBottomColor="black"
          />
        </View>
        <Ionicons name="search" color="black" size={24} />
      </View>
      <FlatList
        style={styles.rootContainer}
        data={dummyFriend}
        renderItem={(itemData) => <FriendListItem />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "red",
    borderColor: "black",
    margin: 10,
  },
  textInputContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    padding: 20,
    borderColor: "black",
    backgroundColor: "black",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#ddd",
    borderBottomColor: "black",
  },
  rootContainer: {
    flex: 1,
    backgroundColor: "blue",
  },
});

export default FriendScreen;
