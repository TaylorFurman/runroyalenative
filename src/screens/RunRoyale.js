import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,

} from "react-native";
import { Geolocation } from "../components/Geolocation";


export function RunRoyale(props) {
  const { navigation } = props;
  // Placeholder to see layout
  const numOfRunners = 1;
  return (
    <>
      <View>
        <Text>{`Number of Runners: ${numOfRunners}`}</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {[...Array(numOfRunners)].map((e, i) => (
            <View key={i} style={styles.geolocation}>
              <Geolocation navigation={navigation}/>
            </View>
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
  geolocation: {
    width: 300,
    height: 200,
  },
});
