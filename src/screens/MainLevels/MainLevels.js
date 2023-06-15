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
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PlaySound from '../../../assets/sound/pressSound';
import SettingModal from '../../components/settingModal';
import {MAIN_LEVLES} from '../../utils/services/GameServices/LevelUtils';
import AppBackground from '../../components/appBackground ';
import {useTranslation} from 'react-i18next';
import AntDesign from 'react-native-vector-icons/AntDesign'
const MainScreen = props => {
  const {t, i18n} = useTranslation();

  const [icon, setIcon] = useState(true);
  const [settingModal, setSettingModal] = useState(false);

  const data = [
    {
      level: '1st',
      name: 'Animals',
      img: '',
      isLocked: false,
    },
    {
      level: '2nd',
      name: 'People',
      img: '',
      isLocked: true,
    },
    {
      level: '3rd',
      name: 'Sports',
      img: '',
      isLocked: true,
    },
    {
      level: '4th',
      name: 'Fantasy Forms 1',
      img: '',
      isLocked: true,
    },
    {
      level: '5th',
      name: 'Fantasy Forms 2',
      img: '',
      isLocked: true,
    },
    {
      level: '6th',
      name: 'Fantasy Forms 3',
      img: '',
      isLocked: true,
    },
  ];
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     // justifyContent: 'center',
    //     // alignItems: 'center',
    //     backgroundColor: '#00b200',
    //   }}>
    <AppBackground>
      <View
        style={{
          flexDirection: 'row-reverse',
          marginTop: 40,
          alignItems: 'center',
        }}>
       <View
          style={{
            width: '27%',
            height: 40,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            marginEnd: 10,
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <AntDesign name="star" size={24} color="#FFB600" />
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'LeagueSpartan-SemiBold',
              color: 'white',
              // marginTop: 5,
            }}>
            2432
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 130,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 40,
            fontFamily: 'LeagueSpartan-SemiBold',
            color: 'white',
          }}>
          {t('Main Levels')}
        </Text>
      </View>
      <FlatList
        style={{alignSelf: 'center'}}
        data={data}
        numColumns={3}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              disabled={item.isLocked}
              onPress={() => {
                PlaySound();
                props.navigation.navigate('Sub', {name: item.name});
              }}
              style={{
                alignSelf: 'center',
                width: '29%',
                minHeight: 200,
                margin: 8,
                backgroundColor:item.isLocked ? '#dcdcdc' :  'white',
                borderRadius: 15,
                paddingVertical:10
                // opacity: item.isLocked ? 0.5 : 1,
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: 'LeagueSpartan-SemiBold',
                    fontSize: 18,
                    marginTop: 10,
                    color: '#00b200',
                  }}>
                  {item.level}
                </Text>
                <Text
                  style={{
                    fontFamily: 'LeagueSpartan-SemiBold',
                    fontSize: 22,
                    marginTop: 5,
                    color: '#FFB600',
                  }}>
                  {t('Level')}
                </Text>
                <ImageBackground
                  source={{
                    uri: 'https://cdn.pixabay.com/photo/2013/07/13/13/14/tiger-160601_1280.png',
                  }}
                  style={{width: 85, height: 88, marginTop: 6}}>
                  {item.isLocked ? (
                    <Ionicons
                      style={{alignSelf: 'center'}}
                      name="lock-closed"
                      size={85}
                      color="black"
                    />
                  ) : (
                    ''
                  )}
                </ImageBackground>
                <Text
                  style={{
                    fontFamily: 'LeagueSpartan-SemiBold',
                    fontSize: 15,
                    color: '#00b200',
                    marginTop: 8,
                  }}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
          marginBottom: 40,
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
            PlaySound();
          }}
          style={{
            width: 70,
            height: 70,
            borderRadius: 40,
            margin: 10,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            elevation:10
          }}>
          <Ionicons name="arrow-back" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSettingModal(true);
            PlaySound();
          }}
          style={{
            width: 70,
            height: 70,
            borderRadius: 40,
            margin: 10,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            elevation:10

          }}>
          <Ionicons name="settings" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <SettingModal
        onPressK={() => {
          setSettingModal(false);
          PlaySound();
        }}
        visible={settingModal}
        onPressC={() => {
          setSettingModal(false);
          PlaySound();
        }}
      />
    </AppBackground>
  );
};

export default MainScreen;
