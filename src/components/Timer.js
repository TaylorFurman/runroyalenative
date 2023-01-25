import React, { useEffect, useState } from 'react'
import { Text } from 'react-native';

export const Timer= ()=>{
    //const [totalRunTime, setTotalRunTime ] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    useEffect(()=>{
        setTimeout(() =>{
            setSeconds(seconds + 1)
        }, 1000)
        if(seconds >= 9){
            setSeconds(0);
            setMinutes(minutes + 1)
        }
        if(minutes >=59){
            setMinutes(0);
            setHours(hours + 1)
        }
    })

    return(
        <>
            <Text>Hours: {hours}</Text>
            <Text>Minutes: {minutes}</Text>
            <Text>Seconds: {seconds}</Text>
        </>
    )
}