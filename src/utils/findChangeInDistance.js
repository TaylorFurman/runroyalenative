import { getDistance } from "geolib";

let locationHistory = null;

export function findChangeInDistance(latitude, longitude) {
  const currentLocation = { latitude: latitude, longitude: longitude };
  if (!locationHistory) {
    locationHistory = currentLocation;
    return 0;
  }
  if (currentLocation === locationHistory) {
    return 0;
  }

  /* 
        getDistance calculates the distance between two lat long points in meters.
        The third argument is to gather accuracy of distance changed
        By default the accuracy is 1 
    */

  const distanceData = getDistance(locationHistory, currentLocation, 0.01);
  locationHistory = currentLocation;

  return distanceData;
}
