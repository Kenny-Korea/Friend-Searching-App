import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Swiper from "react-native-swiper";
import Card from "../components/Card";
import { dummyData } from "../dummyData";

const HomeScreen = () => {
  return (
    <>
      <View style={styles.rootContainer}>
        <View style={{ flex: 1, backgroundColor: "#fff" }} />
        <View style={styles.testContainer}>
          <Swiper
            containerStyle={styles.swiperContainer}
            horizontal={false}
            showsPagination={false}
          >
            {dummyData.map((item) => (
              <Card userInfo={item} key={item.userId} />
            ))}
          </Swiper>
        </View>
        <View style={{ flex: 2, backgroundColor: "#fff" }} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  swiperContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  testContainer: {
    flex: 40,
  },
});

export default HomeScreen;
