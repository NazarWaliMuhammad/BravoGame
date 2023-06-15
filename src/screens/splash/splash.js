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
import {useTranslation} from 'react-i18next';
import AppBackground from '../../components/appBackground ';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = props => {
  const {i18n} = useTranslation();
  // const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const _checkAuth = async() => {
    const lang_selected = await AsyncStorage.getItem('Selected_Language');
    if(!lang_selected) {
        props.navigation.replace("FirstTimeLogin")
    }  else {
      i18n.changeLanguage(lang_selected);
      setTimeout(() => {
        props.navigation.navigate('Login');
      }, 1500);
    }
   
  }
  useEffect(() => {
   _checkAuth();
  }, []);
  return (
    <AppBackground>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 280,
            height: 110,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/image/bravo.png')}
            style={{width: 300, height: 300}}
          />
        </View>
        {/* <Text
          style={{
            fontFamily: 'LeagueSpartan-Black',
            fontSize: 60,
            color: 'white',
          }}>
          BRAVO!!
        </Text> */}
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
    </AppBackground>
  );
};

export default SplashScreen;
