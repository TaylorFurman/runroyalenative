import React from "react";
import {
  View,
  Text,
  LogBox,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Geolocation } from "../components/Geolocation";
import { Timer } from "../components/Timer";

export function RunRoyale(props) {
  const { navigation } = props;
  // Placeholder to see layout
  const numOfRunners = 15;
  return (
    <>
      <View>
        <Text>{`Number of Runners: ${numOfRunners}`}</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {[...Array(numOfRunners)].map((e, i) => (
            <TouchableOpacity
              style={styles.touchArea}
              onPress={() => navigation.navigate("Home")}
            >
              <View style={styles.geolocation}>
                <Geolocation />
                <Timer />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "powderblue",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  touchArea: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 20,
  },
  geolocation: {
    width: 300,
    height: 200,
  },
  // scrollView: {
  //   marginHorizontal: 20,
  // },
});
