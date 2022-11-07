import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MyPageListItem from "../components/MyPageListItem";
import { dummyData } from "../dummyData";

const MyPageScreen = () => {
  const myPageItemList = ["프로필 수정", "블라블라1", "블라블라2", "블라블라3"];
  // const test = [1, 2, 3, 4, 5];
  return (
    <View style={styles.rootContainer}>
      <View style={styles.thumbnailImageContainer}>
        <ImageBackground
          source={{ uri: dummyData[0].userImage }}
          resizeMode="cover"
          style={styles.thumbnailImage}
        />
      </View>
      <Text>김광민</Text>
      <Text>27</Text>
      <FlatList
        data={myPageItemList}
        renderItem={(item) => <MyPageListItem myPageItem={item.item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  thumbnailImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
  },
  thumbnailImage: {
    width: 150,
    height: 150,
  },
});

export default MyPageScreen;
