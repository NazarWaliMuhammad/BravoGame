import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PlaySound from '../../../assets/sound/pressSound';
const SignUpScreen = props => {
  const [icon, setIcon] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#00b200',
      }}>
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
          height: 200,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            fontFamily: 'LeagueSpartan-Bold',
          }}>
          Sign up
        </Text>
      </View>
      <View style={{width: '100%', alignSelf: 'center', alignItems: 'center'}}>
        <View
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
        </View>
        <View
          style={{
            width: '85%',
            height: 55,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 20,
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              style={{marginStart: 24}}
              name="key"
              size={30}
              color="#00b200"
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
                name="eye"
                size={28}
                color="#00b200"
              />
            ) : (
              <MaterialCommunityIcons
                style={{marginEnd: 30}}
                name="eye-off"
                size={28}
                color="#00b200"
              />
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '85%',
            height: 55,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 20,
            alignItems: 'center',
            marginTop: 20,
          }}>
          <MaterialCommunityIcons
            style={{marginStart: 24}}
            name="alphabet-latin"
            size={33}
            color="#00b200"
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
            borderRadius: 20,
            alignItems: 'center',
            marginTop: 20,
          }}>
          <MaterialCommunityIcons
            style={{marginStart: 24}}
            name="home"
            size={33}
            color="#00b200"
          />
          <TextInput
            placeholder="Country"
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
        <TouchableOpacity
          onPress={() => {
            PlaySound();
          }}
          style={{
            marginTop: 20,
            width: '45 %',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFB600',
            borderRadius: 20,
            elevation: 4,
            shadowOffset: {width: 0, height: 0},
            shadowColor: 'black',
            shadowRadius: 20,
            shadowOpacity: 0.1,
          }}>
          <Text
            style={{
              fontFamily: 'LeagueSpartan-SemiBold',
              color: 'white',
              fontSize: 25,
            }}>
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            PlaySound();
          }}
          style={{
            marginTop: 24,
            width: '80%',
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#718BD9',
            borderRadius: 20,
            elevation: 4,
            shadowOffset: {width: 0, height: 0},
            shadowColor: 'black',
            shadowRadius: 20,
            shadowOpacity: 0.2,
          }}>
          <MaterialCommunityIcons
            style={{marginStart: 30}}
            name="facebook"
            size={34}
            color="#3b5998"
          />
          <Text
            style={{
              fontFamily: 'LeagueSpartan-SemiBold',
              color: 'white',
              fontSize: 20,
              marginStart: 16,
            }}>
            Sign up With Facebook
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
            Already have an account?
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
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
