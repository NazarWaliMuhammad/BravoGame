import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, Image, ActivityIndicator, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PlaySound from '../../../assets/sound/pressSound';
import AppBackground from '../../components/appBackground ';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';

const SignUpScreen = props => {
  const [icon, setIcon] = useState(true);
  const {t, i18n} = useTranslation();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  const [username,setUsername] = useState('');

  const _registerUser = () => {
    props.navigation.replace('Home');

    // if (email.length === 0 || password.length === 0 || username.length == 0) {
    //   alert('Please fill the form correctly, email,password and username are required');
    // } else {
    //   setIsLoading(true);
    //   auth()
    //     .createUserWithEmailAndPassword(email, password)
    //     .then(() => {
    //       props.navigation.replace('Home');
    //       // setIsLoading(false);
    //     })
    //     .catch(error => {
    //       setIsLoading(false);
    //       // setIsLoading(false);
    //       if (error.code === 'auth/invalid-email') {
    //         alert('That email address is invalid!');
    //       } else {
    //         alert(error.code);
    //       }
    //     });
    // }
  };
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     // justifyContent: 'center',
    //     // alignItems: 'center',
    //     // backgroundColor: '#00b200',
    //   }}>
    <AppBackground>
       <ScrollView contentContainerStyle={{flexGrow:1}}>
       <View style={{marginTop: 40}}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
            PlaySound();
          }}
          style={{marginStart: 15}}>
          <FontAwesome name="long-arrow-left" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 280,
          alignItems: 'center',
          justifyContent: 'center',
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
        <Text
          style={{
            color: 'white',
            fontSize: 26,
            fontFamily: 'LeagueSpartan-Medium',
            marginVertical: -10,
            marginBottom: 20,
          }}>
          {t('Register yourself')}
        </Text>
      </View>
      <View style={{width: '100%', alignSelf: 'center', alignItems: 'center'}}>
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
            name="alphabet-latin"
            size={33}
            color="black"
          />
          <TextInput
            value={username}
            onChangeText={value => setUsername(value)}
            placeholder={t('Username')}
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
            onChangeText={value => setEmail(value)}
            placeholder={t('email')}
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
            marginTop: 10,
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
              onChangeText={value => setPassword(value)}
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
        disabled={isLoading}
          onPress={() => {
            PlaySound();
            _registerUser()
          }}
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
            size='small'
            color={'white'}
            />
            :
            <Text
            style={{
              fontFamily: 'LeagueSpartan-SemiBold',
              color: 'white',
              fontSize: 27,
            }}>
            {t('SignUp')}
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
            {t('Already have an account')}
          </Text>
          <TouchableOpacity
            onPress={() => {
              PlaySound();
              props.navigation.navigate('Login');
            }}
            style={{marginStart: 5}}>
            <Text
              style={{
                fontFamily: 'LeagueSpartan-SemiBold',
                fontSize: 18,
                color: 'red',
              }}>
              {t('Login')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
       </ScrollView>
    </AppBackground>
  );
};

export default SignUpScreen;
