import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { parseTimeFromSeconds } from '../utils/parseTimeFromSeconds';

export function SummaryOfRun(props) {
  const { route, navigation } = props;
  // Placeholder to see layout
  const { coordinates, distanceChange, startDate } = route.params;

  const seconds = Math.floor((Date.now() - startDate) / 1000);

  const { totalHours, totalMinutes, totalSeconds } = parseTimeFromSeconds(seconds);

  function saveActivity() {
    // Make API call to save activity
    navigation.navigate('Home');
  }

  return (
    <>
      <View style={styles.container}>
        <Text>{`Distance Ran: ${distanceChange}m`}</Text>
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
            key={'start'}
            coordinate={{
              latitude: coordinates[0]?.latitude,
              longitude: coordinates[0]?.longitude,
              latitudeDelta: 0.00122,
              longitudeDelta: 0.00121,
            }}
            title='Start'
            pinColor={'green'}
          />
          <Marker
            key={'end'}
            coordinate={{
              latitude: coordinates[coordinates.length - 1]?.latitude,
              longitude: coordinates[coordinates.length - 1]?.longitude,
              latitudeDelta: 0.00122,
              longitudeDelta: 0.00121,
            }}
            title='End'
            pinColor={'red'}
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
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.touchArea}
          onLongPress={() => {
            saveActivity();
          }}
          delayLongPress={750}
        >
          <Text>Save Activity</Text>
        </TouchableOpacity>
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
    height: '100%'
  },
});
