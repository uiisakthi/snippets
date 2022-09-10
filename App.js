/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Message from './app/snippets/whatsapp/Message';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Message />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
