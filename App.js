import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollView}>
          <View style={styles.mainHeader}></View>
          <View style={styles.mainContainer}></View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'gray',
    flexGrow: 1,
  },
  mainHeader: {
    backgroundColor: 'gray',
    flex: 0.25,
  },
  mainContainer: {
    flex: 0.75,
    backgroundColor: 'white',
    borderTopLeftRadius: 70,
  },
});

export default App;
