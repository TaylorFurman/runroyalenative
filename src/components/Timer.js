import React, { useEffect, useState } from "react";
import { Text } from "react-native";

export const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId = setTimeout(() => setTime(time + 1), 1000);
    return () => clearTimeout(intervalId);
  }, [time]);

  // Hours calculation
  const hours = Math.floor(time / 3600);

  // Minutes calculation
  const minutes = Math.floor((time % 3600) / 60);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) % 60);

  return (
    <>
      <Text>Hours: {hours}</Text>
      <Text>Minutes: {minutes}</Text>
      <Text>Seconds: {seconds}</Text>
    </>
  );
};
