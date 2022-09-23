import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TextComponent({text}) {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
