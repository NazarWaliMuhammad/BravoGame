// Timer.js

import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, StyleSheet} from 'react-native';
import {setTimer} from '../../redux/Action/Action';

const Timer = () => {
  const time = useSelector(state => state.time);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        dispatch(setTimer(time - 1));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <Text
      style={{
        fontSize: 16,
        fontFamily: 'LeagueSpartan-SemiBold',
        color: 'white',
        marginTop: 5,
        textAlign: 'center',
      }}>
      {formatTime(time)}
    </Text>
  );
};

export default Timer;
