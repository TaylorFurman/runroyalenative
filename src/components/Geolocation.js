import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { Platform, Text, View, StyleSheet, Dimensions } from "react-native";

import * as Location from "expo-location";
import { findChangeInDistance } from "./utils/findChangeInDistance";

export function Geolocation() {
  const [location, setLocation] = useState(null);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [distanceChange, setDistanceChange] = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLongitude(location.coords.longitude);
      setLatitude(location.coords.latitude);
      const distance = findChangeInDistance(location.coords.latitude, location.coords.longitude);
      setDistanceChange(distance)
    })();
  }, [latitude, longitude]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.00122,
            longitudeDelta: 0.00121,
          }}
        >
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.00122,
              longitudeDelta: 0.00121,
            }}
            title="Marker"
          />
        </MapView>
      </View>
      <Text>Distance(m): {distanceChange}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,

    alignSelf: "stretch",
    height: "100%",
  },
});
