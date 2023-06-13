import React, {useState} from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PlaySound from '../../../assets/sound/pressSound';
import AppBackground from '../../components/appBackground ';
const loginScreen = props => {
  const [icon, setIcon] = useState(true);

  return (
    <AppBackground>
      <View
        style={{
          width: '100%',
          height: 350,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 60,
            fontFamily: 'LeagueSpartan-Bold',
            marginTop: 60,
          }}>
          BRAVO!!
        </Text>
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
            name="alphabet-latin"
            size={33}
            color="black"
          />
          <TextInput
            placeholder="Username"
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
              placeholder="Password"
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
            props.navigation.navigate('Home');
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
          <Text
            style={{
              fontFamily: 'LeagueSpartan-SemiBold',
              color: 'white',
              fontSize: 27,
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
          <Text
            style={{
              fontFamily: 'LeagueSpartan-Medium',
              fontSize: 18,
              color: 'white',
            }}>
            Don't have an account?
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
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppBackground>
  );
};

export default loginScreen;
