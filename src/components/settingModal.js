import React, {useState} from 'react';
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Picker,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PlaySound from '../../assets/sound/pressSound';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useTranslation} from 'react-i18next';

const SettingModal = props => {
  const [soundIcon, setSoundIcon] = useState(true);
  const [musicIcon, setMusicIcon] = useState(true);
  const [isSelected, setIsSelected] = useState(true);
  const {t, i18n} = useTranslation();
  const [applangauge, setAppLanguage] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleChangeLanguage = async () => {
    i18n.changeLanguage(applangauge);
    setSelectedLanguage(applangauge);
    await AsyncStorage.setItem('Selected_Language', applangauge);
  };
  //   const SLIDER_WIDTH = Dimensions.get('window').width + 30;
  //   const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
  //   const renderItem = ({item}) => {
  //     return (
  //       <View
  //         style={{
  //           //   borderWidth: 1,
  //           padding: 20,
  //           borderRadius: 20,
  //           alignItems: 'center',
  //           backgroundColor: 'white',
  //         }}>
  //         <Image source={{uri: item.url}} style={{width: 200, height: 200}} />
  //         <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>
  //           {item.name}
  //         </Text>
  //       </View>
  //     );
  //   };
  return (
    <Modal transparent={true} visible={props.visible}>
      <View
        style={{
          backgroundColor: '#000000aa',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '80%',
            height: 400,
            borderRadius: 10,
            alignItems: 'center',
            borderWidth: 3,
            borderColor: '#FFB600',
          }}>
          <Text
            style={{
              fontFamily: 'LeagueSpartan-Bold',
              fontSize: 50,
              color: '#00b200',
              marginTop: 30,
            }}>
            {t('Settings')}
          </Text>
          <View
            style={{
              width: '100%',
              height: 270,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '100%',
                height: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#d3d3d3',
                paddingBottom: 10,
              }}>
              <Text
                style={{
                  marginStart: 10,
                  fontFamily: 'LeagueSpartan-SemiBold',
                  fontSize: 30,
                  color: '#FFB600',
                }}>
                Sound
              </Text>
              <TouchableOpacity
                style={{marginEnd: 10}}
                onPress={() => {
                  setSoundIcon(prev => !prev);
                  PlaySound();
                }}>
                {soundIcon ? (
                  <FontAwesome5 name="toggle-on" size={34} color="green" />
                ) : (
                  <FontAwesome5 name="toggle-off" size={34} color="red" />
                )}
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                height: 60,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#d3d3d3',
              }}>
              <Text
                style={{
                  marginStart: 10,
                  fontFamily: 'LeagueSpartan-SemiBold',
                  fontSize: 30,
                  color: '#FFB600',
                }}>
                {t('Music')}
              </Text>
              <TouchableOpacity
                style={{marginEnd: 10}}
                onPress={() => {
                  setMusicIcon(prev => !prev);
                  PlaySound();
                }}>
                {musicIcon ? (
                  <FontAwesome5 name="toggle-on" size={34} color="green" />
                ) : (
                  <FontAwesome5 name="toggle-off" size={34} color="red" />
                )}
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                height: 50,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 20,
              }}>
              <Text
                style={{
                  marginStart: 10,
                  fontFamily: 'LeagueSpartan-SemiBold',
                  fontSize: 30,
                  color: '#FFB600',
                }}>
                {t('Language')}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  // disabled={selectedLanguage === 'en'}
                  style={{marginEnd: 10}}
                  onPress={() => {
                    setIsSelected(true);
                    PlaySound();
                    setAppLanguage('en');
                  }}>
                  <Text
                    style={{
                      marginStart: 10,
                      fontFamily: 'LeagueSpartan-SemiBold',
                      fontSize: 20,
                      color: isSelected ? '#00b200' : '#d3d3d3',
                    }}>
                    En
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  // disabled={selectedLanguage === 'en'}
                  style={{marginEnd: 10}}
                  onPress={() => {
                    setIsSelected(false);
                    PlaySound();
                    setAppLanguage('it');
                  }}>
                  <Text
                    style={{
                      marginStart: 10,
                      fontFamily: 'LeagueSpartan-SemiBold',
                      fontSize: 20,
                      color: isSelected ? '#d3d3d3' : '#00b200',
                    }}>
                    It
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 130,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => {
                setIsSelected(prev);
                props.onPressC();
              }}
              style={{
                width: '40%',
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#00b200',
                marginStart: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-SemiBold',
                  fontSize: 23,
                  color: 'white',
                  borderRadius: 10,
                }}>
                {t('Cancel')}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleChangeLanguage();
                props.onPressK();
              }}
              style={{
                width: '40%',
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#00b200',
                marginEnd: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-SemiBold',
                  fontSize: 23,
                  color: 'white',
                  borderRadius: 10,
                }}>
                Ok
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SettingModal;
