import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../../utils/constants/screenNames';

export type HomescreenProps = {

}


const Home: React.FC<HomescreenProps> = () => {

  const navigation = useNavigation()
  const handleNavigate = () => {
    navigation.navigate(screenName.Profile as never)
  }
  return (
    <View>
      <TouchableOpacity onPress={() => handleNavigate()}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home