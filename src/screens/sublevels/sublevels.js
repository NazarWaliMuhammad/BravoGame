import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
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
// import {ANIMALS_IMGS} from '../../utils/services/GameServices/LevelUtils';
const SubScreen = props => {
  const [settingModal, setSettingModal] = useState(false);
  const [category, setCategory] = useState(null);
  const [imagesData, setImagesData] = useState(null);
  const [dataInNewArray, setDataInNewArray] = useState(null);
  useEffect(() => {
    if (props.route.params.name === 'Animals') {
      setCategory([
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

      // setDataInNewArray(dataInArray);
      //   [
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2022/01/10/11/23/heart-6928093_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2016/10/10/14/13/dog-1728494_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/14/tiger-160601_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2018/01/10/23/53/rabbit-3075088_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2012/04/02/15/05/elephant-24722_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2012/05/07/13/00/giraffe-48393_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/12/17/55/zebra-152604_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/01/30/00/45/bird-616803_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/12/05/rattlesnake-159135_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2012/05/04/10/06/animal-47047_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/12/16/29/hornet-151003_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2012/05/07/13/22/camel-48445_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2018/07/21/07/27/cat-3552048_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2022/08/23/11/40/fox-7405603_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/03/04/18/02/panda-659186_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2020/07/21/16/24/landscape-5426755_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2019/09/19/12/23/bird-4489182_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2016/07/18/12/13/parrot-1525817_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2016/11/18/21/10/wolf-1836875_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2012/04/25/00/03/dove-41260_1280.png',
      //   },
      // ]
      // );
    }
    if (props.route.params.name === 'People') {
      // setCategory([
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      // ]);
    }
    if (props.route.params.name === 'Sports') {
      // setCategory([
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
      //   },
      // ])
    }
    if (props.route.params.name === 'Fantasy Forms 1') {
      // setCategory([
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      // ]);
    }
    if (props.route.params.name === 'Fantasy Forms 2') {
      // setCategory([
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      // ]);
    }
    if (props.route.params.name === 'Fantasy Forms 3') {
      setCategory([
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
        },
      ]);
    }
  }, []);
  // console.log(category);

  const generateRandomImages = async numTiles => {
    let randomImg = [];
    for (let a = 0; a < numTiles; a++) {
      const randomIndex = Math.floor(Math.random() * category.length);
      // console.log(randomIndex);
      randomImg.push(category[randomIndex]);
    }
    // console.log(randomImg);
    // setTimeout(() => {
    return randomImg;
    //   setImagesData(randomImg);
    // // }, 2000);
    // console.log(imagesData);

    // props.navigation.navigate('Game', {
    //   data: imagesData,
    // });
    // console.log(imagesData);
  };
  const data = [
    {
      level: '1st',
      name: 2,
      img: 'https://img.freepik.com/free-vector/seamless-pattern-vintage-stone-hexagonal-tiles-textured-paving-background-bright-geometric-tiles_172107-1295.jpg?w=826&t=st=1685810197~exp=1685810797~hmac=a1d2e1d1cb94bc52666246398c4da5d44cb28250fe5ae59d5fde28f04278a2e5',
      color: '#88CCEE',
      difficulty: 'Begginer',
      data: imagesData,
      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: '2nd',
      name: 3,
      img: 'https://cdn.pixabay.com/photo/2022/03/24/16/30/gardener-7089417_1280.png',
      color: '#55BBAA',
      difficulty: 'Easy',
      data: imagesData,
      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: '3rd',
      name: 4,
      img: 'https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_1280.png',
      color: '#FFBB66',
      difficulty: 'Intermediate',
      data: imagesData,
      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: '4th',
      name: 5,
      img: 'https://cdn.pixabay.com/photo/2019/02/19/16/53/rock-4007203_1280.png',
      color: '#FF8866',
      difficulty: 'Advanced',
      data: imagesData,
      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: '5th',
      name: 6,
      img: 'https://cdn.pixabay.com/photo/2021/02/07/19/37/drawing-5992475_1280.png',
      color: '#FF5555',
      difficulty: 'Expert',
      data: imagesData,
      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: '6th',
      name: 7,
      img: 'https://cdn.pixabay.com/photo/2017/12/16/22/26/snowflake-3023441_1280.png',
      color: '#AA4488',
      difficulty: 'Master',
      data: imagesData,
      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: '7th',
      name: 8,
      img: 'https://cdn.pixabay.com/photo/2017/12/16/22/26/snowflake-3023441_1280.png',
      color: '#8844AA',
      difficulty: 'Prodigy',
      data: imagesData,
      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: '8th',
      name: 9,
      img: 'https://cdn.pixabay.com/photo/2017/12/16/22/26/snowflake-3023441_1280.png',
      color: '#332288',
      difficulty: 'Grandmaster',
      data: imagesData,
      // .map(item => {
      //   return item.image;
      // }),
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#00b200',
      }}>
      <View
        style={{
          flexDirection: 'row-reverse',
          marginTop: 45,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '35%',
            height: 55,
            backgroundColor: 'white',
            marginEnd: 10,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'LeagueSpartan-SemiBold',
              color: '#00b200',
            }}>
            Scoreboard
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'LeagueSpartan-SemiBold',
              color: '#FFB600',
              marginTop: 5,
            }}>
            2432
          </Text>
        </View>
        <View
          style={{
            width: '35%',
            height: 55,
            backgroundColor: 'white',
            marginStart: 10,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'LeagueSpartan-SemiBold',
              color: '#00b200',
            }}>
            Time Remaining
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'LeagueSpartan-SemiBold',
              color: '#FFB600',
              marginTop: 5,
            }}>
            4:47
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 150,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 60,
            fontFamily: 'LeagueSpartan-SemiBold',
            color: 'white',
          }}>
          {props.route.params.name}
        </Text>
      </View>
      <FlatList
        style={{alignSelf: 'center'}}
        data={data}
        numColumns={3}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                // const gen = generateRandomImages(item.name);
                props.navigation.navigate('Game', {
                  data: generateRandomImages(item.name),
                });
                PlaySound();
              }}
              style={{
                alignSelf: 'center',
                width: '29%',
                height: 155,
                margin: 8,
                backgroundColor: 'white',
                borderRadius: 15,
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
                  Level
                </Text>
                <Image
                  source={{
                    uri: 'https://img.freepik.com/free-vector/seamless-pattern-vintage-stone-hexagonal-tiles-textured-paving-background-bright-geometric-tiles_172107-1295.jpg?w=826&t=st=1685810197~exp=1685810797~hmac=a1d2e1d1cb94bc52666246398c4da5d44cb28250fe5ae59d5fde28f04278a2e5',
                  }}
                  style={{
                    width: 60,
                    height: 60,
                    marginTop: 6,
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'LeagueSpartan-SemiBold',
                    fontSize: 16,
                    color: item.color,
                    marginTop: 8,
                    marginStart: 4,
                  }}>
                  {item.difficulty}
                </Text>
                {/* <Text
                  style={{
                    fontFamily: 'LeagueSpartan-SemiBold',
                    fontSize: 18,
                    color: '#03D1FF',
                    marginTop: 8,
                  }}>
                  {item.name} Tiles
                </Text> */}
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
            width: 60,
            height: 60,
            borderRadius: 40,
            margin: 10,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="arrow-back" size={40} color="#00b200" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSettingModal(true);
            PlaySound();
          }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 40,
            margin: 10,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="settings" size={40} color="#00b200" />
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
    </View>
  );
};

export default SubScreen;
