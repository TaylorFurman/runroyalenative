import React, { useState, useEffect } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Timer } from './Timer';

import * as Location from 'expo-location';
import { findChangeInDistance } from '../utils/findChangeInDistance';

export function Geolocation({ navigation }) {
  const [location, setLocation] = useState(null);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [distanceChange, setDistanceChange] = useState(0);
  const [coordinates, setCoordinates] = useState([]);

  const [time, setTime] = useState(0);
  const [startDate, setStartDate] = useState(0);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});

      setLocation(location);
      if (!startDate) {
        setStartDate(Date.now());
      }
      setLongitude(location.coords.longitude);
      setLatitude(location.coords.latitude);
      setCoordinates((oldArray) => [
        ...oldArray,
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      ]);
      const distance = findChangeInDistance(
        location.coords.latitude,
        location.coords.longitude
      );
      setDistanceChange(Math.floor(distanceChange + distance));
    })();
  }, [time]);

  function stopRun() {
    navigation.navigate('Summary', {
      distanceChange,
      startDate,
      coordinates,
    });
  }

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  if (!location) {
    return (
      <View style={[styles.loading]}>
        <Text>Loading</Text>
        <ActivityIndicator />
      </View>
    );
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
            title='Marker'
          />
          <Polyline
            coordinates={coordinates}
            strokeColor='#000' // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
              '#7F0000',
              '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
              '#B24112',
              '#E5845C',
              '#238C23',
              '#7F0000',
            ]}
            strokeWidth={6}
          />
        </MapView>
        <Text>Distance(m): {distanceChange}</Text>

        <Timer time={time} setTime={setTime} location={location} />
        <TouchableOpacity
          style={styles.touchArea}
          onLongPress={() => {
            stopRun();
          }}
          delayLongPress={750}
        >
          <Text>Stop Run</Text>
        </TouchableOpacity>
        <Text>{`startDate ${startDate}`}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,

    alignSelf: 'stretch',
    height: '100%',
  },
  touchArea: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
  },
  loading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
