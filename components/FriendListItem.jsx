import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { dummyData } from "../dummyData";

const FriendListItem = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.leftContainer}>
        <View style={styles.thumbnailContainer}>
          <ImageBackground
            source={{ uri: dummyData[0].userImage }}
            resizeMode="cover"
            style={styles.thumbnailImage}
          />
        </View>
        <View>
          <Text style={styles.nameText}>이수진</Text>
          <Text style={styles.chatPreviewText}>저도 거기 가봤어요!!</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.chatPreviewText}>오후 10:45</Text>
        <View style={styles.newMessageCountContainer}>
          <Text style={styles.newMessageCountText}>2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    height: 70,
    marginHorizontal: 6,
    marginVertical: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingLeft: 10,
    justifyContent: "space-between",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  thumbnailContainer: {
    width: 50,
    height: 50,
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 10,
  },
  thumbnailImage: {
    width: 50,
    height: 50,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  chatPreviewText: {
    fontSize: 12,
    color: "gray",
  },
  rightContainer: {
    alignItems: "flex-end",
    marginRight: 10,
  },
  newMessageCountContainer: {
    width: 16,
    height: 16,
    borderRadius: 10,
    backgroundColor: "tomato",
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  newMessageCountText: {
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
  },
});

export default FriendListItem;
