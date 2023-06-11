import React, {useEffect, useState, useRef} from 'react';
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  AppRegistry,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import PlaySound from '../../assets/sound/pressSound';
const IconModal = props => {
  const imgs = props.data;
  const [data, setData] = useState([
    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
  ]);

  //   const SLIDER_WIDTH = Dimensions.get('window').width + 30;
  //   const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
  const shuffleImgs = () => {
    let randomImg = [];
    for (let a = 0; a < imgs.length; a++) {
      const randomIndex = Math.floor(Math.random() * imgs.length);
      if (randomImg.includes(imgs[randomIndex])) {
        a--;
        continue;
      } else {
        randomImg.push(imgs[randomIndex]);
      }
    }
    setData(randomImg);
    // console.log(randomImg.length);
  };
  useEffect(() => {
    shuffleImgs();
  }, []);
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
  const width = Dimensions.get('window').width * 0.5;
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleButtonPress = () => {
    // Update the currentIndex state to slide the carousel
    setCurrentIndex((currentIndex + 1) % data.length);
    console.log(currentIndex);
  };
  return (
    <Modal transparent={true} visible={props.visible}>
      <GestureHandlerRootView style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#000000aa',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              height: 200,
              marginBottom: 45,
              borderRadius: 10,
            }}>
            <View
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  PlaySound();
                }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Entypo name="thumbs-down" size={28} color="white" />
              </TouchableOpacity>
              <Carousel
                style={{borderRadius: 10}}
                currentIndex={currentIndex}
                width={width}
                height={width / 1.1}
                // autoPlay={true}
                enabled={false}
                data={data}
                scrollAnimationDuration={1000}
                onSnapToItem={index => console.log('current index:', index)}
                renderItem={({item}) => (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={{uri: item}}
                      style={{width: '100%', height: '100%'}}
                    />
                  </View>
                )}
              />

              <TouchableOpacity
                onPress={() => {
                  handleButtonPress();
                  props.onPressUp();
                }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  backgroundColor: 'green',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Entypo name="thumbs-up" size={28} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
};

export default IconModal;
