import React from 'react';
import {View, StatusBar, ScrollView, SafeAreaView} from 'react-native';
import Header from '../../Components/Header';
import TypeContainer from '../../Components/TypeContainer';
import NavigationContainer from '../../Components/NavigationContainer';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import Vision from '../../assets/vision (1).svg';
import Pain from '../../assets/band-aid.svg';
import Sleep from '../../assets/rest.svg';
import Human from '../../assets/human.svg';
import Sense from '../../assets/sleep.svg';
import Chat from '../../assets/chat-bubble.svg';
import theme from '../../theme';
import styles from './styles';
import Slider from '../../Components/Slider';

const Home = (props) => {
  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle="light-content"
      />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <View style={styles.mainHeader}>
            <Header />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.typesContainer}>
              <TypeContainer title="Vision" icon={<Vision width={25} />} />
              <TypeContainer active title="Pain" icon={<Pain width={25} />} />
              <TypeContainer title="Sleep" icon={<Sleep width={25} />} />
              <TypeContainer title="Sense" icon={<Sense width={25} />} />
              <TypeContainer title="Speech" icon={<Chat width={25} />} />
            </ScrollView>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.infoContainer}>
              <View style={[styles.rowContainer, styles.infoTop]}>
                <Text typography={theme.typography.h1}>Point pain on Body</Text>
                <Button primary title="SAVE" />
              </View>
              <Text style={{lineHeight: 15}} typography={theme.typography.p}>
                Select a specific Pain location using the body map and define
                its Severaity
              </Text>
            </View>
            <View>
              <Human height={450} />
            </View>
            <Slider title="Select the Intensity Levels" />
          </View>
        </ScrollView>
        <NavigationContainer />
      </SafeAreaView>
    </>
  );
};

export default Home;
