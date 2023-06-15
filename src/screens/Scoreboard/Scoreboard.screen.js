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
const Scoreboard = props => {
  const {t, i18n} = useTranslation();
  const [showSettingsModal,setShowSettingsModal] = useState(false);

  const data = [
    {
        name:'simone',
        score:105
    },
    {
        name:'stefano',
        score:98
    },
    {
        name:'lukas',
        score:75
    },
    {
        name:'Giulia Rossi',
        score:65
    },
    {
        name:'Marco Bianchi',
        score:50
    }
  ]

  const ScoreCard = ({item,index}) => {
    return (
        <View style={{
            width:'95%',
            height:60,
            borderWidth:1,
            borderColor:"white",
            alignSelf:'center',
            marginVertical:4,
            flexDirection:'row',
            alignItems:'center',
            borderRadius:5
        }}>
            <View style={{
                width:60,justifyContent:'center',alignItems:'center',height:55,
                borderWidth:1,borderRightColor:'white',
                backgroundColor:'rgba(0,0,0,0.1)'
            }}>
                <Text style={{color:'white',fontSize:20}}>{index + 1}</Text>
            </View>
            <View style={{flexDirection:'row',width:'78%',marginLeft:10,alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{color:'white',fontSize:17,fontWeight:'500'}}>{item.name}</Text>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>{item.score}</Text>
            </View>
        </View>
    )
  }
  return (
    <AppBackground>
       <View style={{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginVertical:20
       }}>
       <Text style={{color:'white',fontSize:35,fontWeight:900,textAlign:'center'}}>{t('scoreboard')}</Text>
        <Text style={{color:'white',fontSize:12,fontWeight:300,textAlign:'center'}}>Show the scores of different users here</Text>
       </View>
        <FlatList
        data={data}
        renderItem={({item,index}) => (
            <ScoreCard
            item={item}
            index={index}
            />
        )}
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
            setShowSettingsModal(true);
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
          setShowSettingsModal(false);
          PlaySound();
        }}
        visible={showSettingsModal}
        onPressC={() => {
            setShowSettingsModal(false);
          PlaySound();
        }}
      />
   </AppBackground>
  );
};

export default Scoreboard;
