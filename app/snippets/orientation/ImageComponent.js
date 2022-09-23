import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function ImageComponent({source}) {
  return (
    <View style={styles.container}>
      <Image source={source} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
