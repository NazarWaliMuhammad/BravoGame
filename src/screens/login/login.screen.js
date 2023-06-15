import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PlaySound from '../../../assets/sound/pressSound';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';

import AppBackground from '../../components/appBackground ';
const loginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [icon, setIcon] = useState(true);
  const {t, i18n} = useTranslation();
  const [isLoading,setIsLoading] = useState(false);
  const login = () => {
    props.navigation.replace('Home');
    // if (email.length === 0 || password.length === 0) {
    //   alert('Please enter Email and Password');
    // } else {

    //   setIsLoading(true);
    //   auth()
    //     .signInWithEmailAndPassword(email, password)
    //     .then(() => {
    //       props.navigation.replace('Home');
    //       setIsLoading(false);
    //     })
    //     .catch(error => {
    //       setIsLoading(false);
    //       if (error.code === 'auth/invalid-email') {
    //         alert('That email address is invalid!');
    //       } else {
    //         alert(error.code);
    //       }
    //     });
    // }
  };
  return (
    <AppBackground>
      <View
        style={{
          width: '100%',
          height: 350,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../../assets/image/bravo.png')}
          style={{width: 300, height: 300}}
        />
        {/* <Text
          style={{
            color: 'white',
            fontSize: 60,
            fontFamily: 'LeagueSpartan-Bold',
            marginTop: 60,
          }}>
          BRAVO!!
        </Text> */}
      </View>
      <View style={{width: '100%', alignSelf: 'center', alignItems: 'center'}}>
        {/* <View
          style={{
            width: '85%',
            height: 55,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 20,
            alignItems: 'center',
          }}>
          <MaterialCommunityIcons
            style={{marginStart: 24}}
            name="account-tie"
            size={33}
            color="#00b200"
          />
          <TextInput
            placeholder="Email"
            style={{
              width: '80%',
              height: 55,
              marginStart: 10,
              fontFamily: 'LeagueSpartan-Bold',
              fontSize: 19,
            }}
            placeholderTextColor="gray"
          />
        </View> */}
        <View
          style={{
            width: '85%',
            height: 55,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 12,
            alignItems: 'center',
            marginTop: 10,
          }}>
          <MaterialCommunityIcons
            style={{marginStart: 10}}
            name="email-outline"
            size={33}
            color="black"
          />
          <TextInput
            value={email}
            onChangeText={val => {
              setEmail(val);
            }}
            placeholder={t('Email')}
            style={{
              width: '80%',
              height: 55,
              marginStart: 10,
              fontFamily: 'LeagueSpartan-Bold',
              fontSize: 19,
            }}
            placeholderTextColor="gray"
          />
        </View>
        <View
          style={{
            width: '85%',
            height: 55,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 12,
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              style={{marginStart: 14}}
              name="key"
              size={30}
              color="black"
            />

            <TextInput
              value={password}
              onChangeText={val => {
                setPassword(val);
              }}
              placeholder={t('Password')}
              style={{
                width: '70%',
                height: 55,
                marginStart: 10,
                fontFamily: 'LeagueSpartan-Bold',
                fontSize: 19,
              }}
              placeholderTextColor="gray"
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              PlaySound();
              setIcon(prev => !prev);
            }}>
            {icon ? (
              <MaterialCommunityIcons
                style={{marginEnd: 30}}
                name="eye-off"
                size={28}
                color="black"
              />
            ) : (
              <MaterialCommunityIcons
                style={{marginEnd: 30}}
                name="eye"
                size={28}
                color="black"
              />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            PlaySound();
            login();
          }}
          disabled={isLoading}
          style={{
            marginTop: 30,
            width: '85%',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFB600',
            borderRadius: 12,
            elevation: 4,
            shadowOffset: {width: 0, height: 0},
            shadowColor: 'black',
            shadowRadius: 12,
            shadowOpacity: 0.1,
          }}>
           {
            isLoading ? 
            <ActivityIndicator
            size={'small'}
            color='white'
            />
            :
            <Text
            style={{
              fontFamily: 'LeagueSpartan-SemiBold',
              color: 'white',
              fontSize: 27,
            }}>
            {t('Login')}
          </Text>
           }
        </TouchableOpacity>
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
          <Text
            style={{
              fontFamily: 'LeagueSpartan-Medium',
              fontSize: 18,
              color: 'white',
            }}>
            {t('Dont have an account')}
          </Text>
          <TouchableOpacity
            onPress={() => {
              PlaySound();
              props.navigation.navigate('SignUp');
            }}
            style={{marginStart: 5}}>
            <Text
              style={{
                fontFamily: 'LeagueSpartan-SemiBold',
                fontSize: 18,
                color: 'yellow',
              }}>
              {t('SignUp')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppBackground>
  );
};

export default loginScreen;
