import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#00b200',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'LeagueSpartan-Black',
          fontSize: 60,
          color: 'white',
        }}>
        BRAVO!!
      </Text>
      <Text
        style={{
          fontFamily: 'LeagueSpartan-Medium',
          fontSize: 26,
          color: 'white',
        }}>
        Refine your memories....
      </Text>
      <ActivityIndicator style={{marginTop: 10}} size="large" color="white" />
    </View>
  );
};

export default SplashScreen;
