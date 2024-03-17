import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

function parseTimeFromSeconds(time = 0) {
  let totalHours = 0;
  let totalMinutes = 0;
  let totalSeconds = 0;

  // Hours calculation
  const hours = Math.floor(time / 3600);

  // Minutes calculation
  const minutes = Math.floor((time % 3600) / 60);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) % 60);

  if (hours > 0) {
    totalHours = hours;
  }
  if (minutes > 0) {
    totalMinutes = minutes;
  }
  if (seconds > 0) {
    totalSeconds = seconds;
  }
  console.log({ totalHours, totalMinutes, totalSeconds });

  return { totalHours, totalMinutes, totalSeconds };
}

export function SummaryOfRun(props) {
  const { route } = props;
  // Placeholder to see layout
  const { coordinates, distanceChange, startDate } = route.params;

  const millis = Date.now() - startDate;
  const seconds = Math.floor(millis / 1000);

  const { totalHours, totalMinutes, totalSeconds } = parseTimeFromSeconds(seconds);

  return (
    <>
      <View>
        <Text>{`Distance Ran: ${distanceChange}`}</Text>
        <Text>{`Total Time Ran Hours: ${totalHours} Minutes: ${totalMinutes} Seconds: ${totalSeconds}`}</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: coordinates[0]?.latitude,
            longitude: coordinates[0]?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={{
            latitude: coordinates[0]?.latitude,
            longitude: coordinates[0]?.longitude,
            latitudeDelta: 0.00122,
            longitudeDelta: 0.00121,
          }}
        >
          <Marker
            coordinate={{
              latitude: coordinates[0]?.latitude,
              longitude: coordinates[0]?.longitude,
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'powderblue',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  geolocation: {
    width: 300,
    height: 200,
  },
  map: {
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    height: '100%',
  },
});
