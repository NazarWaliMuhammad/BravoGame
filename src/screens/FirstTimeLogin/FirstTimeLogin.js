import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AppBackground from '../../components/appBackground ';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';

const FirstTimeLogin = props => {
  const [isSelectedIt, setIsSelectedIt] = useState(null);
  const [isSelectedEn, setIsSelectedEn] = useState(null);
  const [button, setButton] = useState(true);
  const [langauge, setLanguage] = useState(null);
  const {i18n} = useTranslation();
  console.log(langauge);

  const LanguageSetter = async () => {
    await AsyncStorage.setItem('Selected_Language', langauge);
    i18n.changeLanguage(isSelectedIt ? 'it' : isSelectedEn ? 'en' : '');
    props.navigation.replace("Login");
  };
  return (
    <AppBackground>
      <View
        style={{
          marginTop: 40,
          width: '100%',
          flex: 0.8,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '82%',
            backgroundColor: 'white',
            height: 270,
            borderRadius: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: 100,
              borderBottomWidth: 0.3,
              borderBottomColor: 'gray',
              //   marginVertical: 20,
            }}>
            <Text
              style={{
                fontFamily: 'LeagueSpartan-Bold',
                fontSize: 30,
                color: 'black',
              }}>
              Select Language
            </Text>
          </View>
          <Pressable
            onPress={() => {
              setIsSelectedEn(false);
              setIsSelectedIt(true);
              setLanguage('it');
              setButton(false);
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '100%',
              height: 80,
              borderBottomWidth: 0.3,
              borderBottomColor: 'gray',
              //   marginVertical: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                setIsSelectedEn(false);
                setIsSelectedIt(true);
                setLanguage('it');
                setButton(false);
              }}
              style={{margin: 20}}>
              {isSelectedIt ? (
                <FontAwesome name="circle" size={33} color="#0bda51" />
              ) : (
                <FontAwesome name="circle-thin" size={33} color="#0bda51" />
              )}
            </TouchableOpacity>
            <Image
              source={require('../../../assets/image/italy.png')}
              style={{width: 55, height: 40}}
            />
            <Text
              style={{
                marginStart: 20,
                fontSize: 28,
                fontFamily: 'LeagueSpartan-SemiBold',
              }}>
              Italia
            </Text>
          </Pressable>
          <Pressable
           onPress={() => {
            setIsSelectedEn(true);
            setIsSelectedIt(false);
            setLanguage('en');
            setButton(false);
          }}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '100%',
              height: 80,

              //   marginVertical: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                setIsSelectedEn(true);
                setIsSelectedIt(false);
                setLanguage('en');
                setButton(false);
              }}
              style={{margin: 20}}>
              {isSelectedEn ? (
                <FontAwesome name="circle" size={33} color="#0bda51" />
              ) : (
                <FontAwesome name="circle-thin" size={33} color="#0bda51" />
              )}
            </TouchableOpacity>
            <Image
              source={require('../../../assets/image/usa.png')}
              style={{width: 55, height: 40}}
            />
            <Text
              style={{
                marginStart: 20,
                fontSize: 28,
                fontFamily: 'LeagueSpartan-SemiBold',
              }}>
              English
            </Text>
          </Pressable>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.replace('Splash');
            LanguageSetter();
          }}
          disabled={button}
          style={{
            width: '82%',
            backgroundColor: '#0bda51',
            height: 60,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 40,
            opacity: button === true ? 0.5 : 1,
          }}>
          <Text
            style={{
              marginStart: 20,
              fontSize: 28,
              fontFamily: 'LeagueSpartan-SemiBold',
              color: 'white',
            }}>
            Proceed
          </Text>
        </TouchableOpacity>
      </View>
    </AppBackground>
  );
};

export default FirstTimeLogin;
