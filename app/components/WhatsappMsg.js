import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function WhatsappMsg() {
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <View style={styles.arrow} />
        <Text style={styles.text}>
          Success is Not Final, Failure is Not Fatal: It is the Courage to
          Continue that Counts.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  arrow: {
    position: 'absolute',
    right: -10,
    top: 0,
    width: 0,
    height: 0,
    borderWidth: 5,
    borderLeftColor: '#d0eeb6',
    borderTopColor: '#d0eeb6',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
  },
  message: {
    padding: 10,
    width: '80%',
    backgroundColor: '#d0eeb6',
    borderRadius: 16,
    borderTopRightRadius: 0,
    alignSelf: 'flex-end',
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});

export default WhatsappMsg;
