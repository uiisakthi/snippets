import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageComponent from './ImageComponent';
import TextComponent from './TextComponent';
import {useDeviceOrientation} from '@react-native-community/hooks';

export default function Screen() {
  const {landscape} = useDeviceOrientation();
  const container = landscape
    ? {
        ...styles.container,
        flexDirection: 'row',
      }
    : {
        ...styles.container,
      };

  return (
    <View style={container}>
      <View style={styles.first}>
        <ImageComponent
          source={{
            uri: 'https://picsum.photos/200/300',
            width: 200,
            height: 300,
          }}
        />
      </View>
      <View style={styles.second}>
        <TextComponent text="Sample text" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  first: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  second: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
