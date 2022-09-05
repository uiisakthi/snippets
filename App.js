/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import WhatsappMsg from './app/components/WhatsappMsg';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WhatsappMsg />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
