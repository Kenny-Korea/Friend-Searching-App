import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DescriptionButton from "./DescriptionButton";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";

// 유저 프로필 카드 컴포넌트
// 그라데이션을 전체 카드에 넣으면 중간부터 너무 어두워지기 때문에
// View를 1:2로 나눠서 1/3 지점부터 그라데이션 넣음
const Card = ({ userInfo }) => {
  const hobby = userInfo.userHobby.split(", ");
  // console.log(hobby.length);
  return (
    <View style={styles.rootContainer}>
      <ImageBackground
        source={{
          uri: userInfo.userImage,
        }}
        resizeMode="cover"
      >
        <Pressable style={styles.marginArea}>
          <Ionicons name="star-outline" color={"white"} size={20} />
        </Pressable>
        <View style={{ flex: 2 }}>
          <LinearGradient colors={["transparent", "#000"]} style={styles.flex1}>
            <View style={styles.gradationContainer}>
              <View style={styles.userInfoContainer}>
                <View style={styles.userNameAndAgeContainer}>
                  <Text style={styles.nameText}>{userInfo.userNickname}</Text>
                  <Text style={styles.ageText}>{userInfo.userAge}</Text>
                </View>
                <Text style={styles.bioText}>{userInfo.userBio}</Text>
                <View style={{ flexDirection: "row" }}>
                  {hobby.map((item, index) => (
                    <DescriptionButton
                      style={styles.bioText}
                      key={item + index}
                    >
                      {item}
                    </DescriptionButton>
                  ))}
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
    borderRadius: 10,
    margin: 30,
    overflow: "hidden",
  },
  gradationContainer: {
    minWidth: "100%",
    minHeight: "100%",
    justifyContent: "flex-end",
  },
  userInfoContainer: {
    flex: 1,
    marginTop: "50%",
    marginHorizontal: 20,
  },
  marginArea: {
    flex: 1,
    alignItems: "flex-end",
    // padding: 10,
    margin: 10,
    // backgroundColor: "blue",
  },
  userNameAndAgeContainer: {
    flexDirection: "row",
  },
  nameText: {
    fontSize: 28,
    fontFamily: "nanum-gothic-bold",
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  ageText: {
    marginHorizontal: 12,
    marginBottom: 4,
    fontSize: 16,
    fontFamily: "nanum-gothic-bold",
    fontWeight: "bold",
    color: "white",
    textAlignVertical: "bottom",
  },
  bioText: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: "nanum-gothic",
    color: "white",
  },
});

export default Card;
