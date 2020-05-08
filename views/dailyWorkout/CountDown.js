/*
This function takes two props:
targetSeconds: a number of seconds for the countdown
timeNow: a date object, always pass new Date() // REQUIRED

It renders a countdown of seconds.
*/

import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

// takes date and minutes, adds them up
function addSeconds(date, seconds) {
  return new Date(date.getTime() + seconds * 1000);
}

const CountDown = (props) => {
  const targetSeconds = props.targetSeconds;
  const startTime = props.timeNow;

  const targetTime = addSeconds(startTime, targetSeconds);

  const calculateTimeLeft = (targetTime) => {
    const difference = +targetTime - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <Text key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </Text>
    );
  });

  return (
    <View>
      {timerComponents.length ? timerComponents : <Text>Time's up!</Text>}
    </View>
  );
};

export default CountDown;
