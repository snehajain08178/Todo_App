import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFon from 'react-native-vector-icons/Fontisto';

export const HeaderIcon = () => {
  return (
    <View>
      <IconAnt name="profile" size={35} />
    </View>
  );
};

export const CheckBox = () => {
  return (
    <View>
      <IconFon name="checkbox-passive" size={15} color='white'/>
    </View>
  );
};

export const ActivecheckBox = () => {
  return (
    <View>
      <IconFon name="checkbox-active" size={15} color='#ab000d'/>
    </View>
  );
};

export const Add = () => {
  return (
    <View>
      <IconAnt name="plus" size={25} />
    </View>
  );
};

export const Edit = () => {
  return (
    <View>
      <IconAnt name="edit" size={25} color='white'/>
    </View>
  );
};

export const Check = () => {
  return (
    <View>
      <IconAnt name="checkcircle" size={25} />
    </View>
  );
};

const styles = StyleSheet.create({
  rotateIcon : {
    transform: [{ rotate: '270deg'}]
  }
});
