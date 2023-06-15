import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontiso from 'react-native-vector-icons/Fontisto';
import PlaySound from '../../../assets/sound/pressSound';
import AppBackground from '../../components/appBackground ';
import {useTranslation} from 'react-i18next';
import SettingModal from '../../components/settingModal';
const HomeScreen = props => {
  const {t, i18n} = useTranslation();

  const data = [
    {
      level: '1st',
      name: 'Animals',
      img: 'https://cdn.pixabay.com/photo/2013/07/13/13/14/tiger-160601_1280.png',
    },
    {
      level: '2nd',
      name: 'People',
      img: 'https://cdn.pixabay.com/photo/2022/03/24/16/30/gardener-7089417_1280.png',
    },
    {
      level: '3rd',
      name: 'Sports',
      img: 'https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_1280.png',
    },
    {
      level: '4th',
      name: 'Fantasy Forms 1',
      img: 'https://cdn.pixabay.com/photo/2019/02/19/16/53/rock-4007203_1280.png',
    },
    {
      level: '5th',
      name: 'Fantasy Forms 2',
      img: 'https://cdn.pixabay.com/photo/2021/02/07/19/37/drawing-5992475_1280.png',
    },
    {
      level: '6th',
      name: 'Fantasy Forms 3',
      img: 'https://cdn.pixabay.com/photo/2017/12/16/22/26/snowflake-3023441_1280.png',
    },
  ];
  const [settingModalVisible,setIsSettingModalVisible] = useState(false);
  return (
    <AppBackground>
         <SettingModal
        onPressK={() => {
          setIsSettingModalVisible(false);
          PlaySound();
        }}
        visible={settingModalVisible}
        onPressC={() => {
          setSettsetIsSettingModalVisibleingModal(false);
          PlaySound();
        }}
      />
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <View
          style={{
            width: 280,
            height: 100,

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
            fontFamily: 'LeagueSpartan-Medium',
            fontSize: 26,
            color: 'white',
            textAlign: 'center',
          }}>
          Refine your memories....
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center',
          // backgroundColor: '#03D1FF',
          flexDirection: 'column-reverse',
        }}>
        <View
          style={{
            height: 240,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{marginVertical: -10}}>
            <TouchableOpacity
              onPress={() => {
                PlaySound();
              }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                marginStart: 4,
                marginTop: 6,
                backgroundColor: '#718BD9',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="star" size={30} color="#FFB600" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                PlaySound();
              }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                marginStart: 4,
                marginTop: 6,
                backgroundColor: '#718BD9',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons name="game-controller" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                PlaySound();
              }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                marginStart: 4,
                marginTop: 6,
                backgroundColor: '#718BD9',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Fontiso name="info" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                PlaySound();
              }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                marginStart: 4,
                marginTop: 6,
                backgroundColor: '#718BD9',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Fontiso name="facebook" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                PlaySound();

                props.navigation.navigate('Main');
              }}
              style={{
                borderWidth:1,
                borderColor:'white',
                backgroundColor:'transparent',
                width: 250,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: '#FFB600',
                borderRadius: 20,
                elevation: 4,
                shadowOffset: {width: 0, height: 0},
                shadowColor: 'black',
                shadowRadius: 20,
                shadowOpacity: 0.1,
                // marginEnd: 19,
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-SemiBold',
                  color: 'white',
                  fontSize: 25,
                }}>
                {t('Play')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                PlaySound();

                props.navigation.navigate('Scoreboard');
              }}
              style={{
                marginTop: 20,
                width: 250,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'purple',
                borderRadius: 20,
                elevation: 4,
                shadowOffset: {width: 0, height: 0},
                shadowColor: 'black',
                shadowRadius: 20,
                shadowOpacity: 0.1,
                borderWidth:1,
                borderColor:'white',
                backgroundColor:'transparent',
                // marginEnd: 19,
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-SemiBold',
                  color: 'white',
                  fontSize: 25,
                }}>
                {t('scoreboard')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                PlaySound();

                props.navigation.navigate('Login');
              }}
              style={{
                marginTop: 20,
                width: 250,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'purple',
                borderRadius: 20,
                elevation: 4,
                shadowOffset: {width: 0, height: 0},
                shadowColor: 'black',
                shadowRadius: 20,
                shadowOpacity: 0.1,
                // marginEnd: 19,
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-SemiBold',
                  color: 'white',
                  fontSize: 25,
                }}>
                {t('Quit')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'column-reverse', marginVertical: 26}}>
            <TouchableOpacity
              onPress={() => {
                PlaySound();
                setIsSettingModalVisible(true);
              }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                marginEnd: 4,
                backgroundColor: '#718BD9',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons name="settings" size={28} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            marginBottom: 20,

            width: '45%',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'purple',
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
            Play
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            marginBottom: 30,
            width: '30 %',
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
            Quit
          </Text>
        </TouchableOpacity>
      </View> */}
      </View>
    </AppBackground>
  );
};

export default HomeScreen;
