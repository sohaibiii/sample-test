import React from 'react';
import { View } from 'react-native';
import Slider from "react-native-slider";
import theme from '../../theme';
import Text from "../Text";
import styles from "./styles";
import Minor from "../../assets/minor.svg";
import Extreme from "../../assets/extreme.svg";

const CustomSlider = (props) => {
  return (
    <View style={styles.mainContainer}>
      <Text
        typography={theme.typography.h3}
        style={styles.heading}
      >
        {props.title}
      </Text>
      <View style={styles.innerContainer}>
        <View style={styles.labelContainer}>
          <Text typography={theme.typography.primaryText}>Low</Text>
          <Text typography={theme.typography.primaryText}>High</Text>
        </View>
        <View style={styles.sliderContainer}>
          <Minor width={17} />
          <Slider
            value={0.3}
            minimumTrackTintColor="#bbcef3"
            maximumTrackTintColor="#1b68ff"
            thumbStyle={styles.thumbStyle}
            style={{width: "85%"}}
            trackStyle={{height: 6}}
          />
          <Extreme width={17} />
        </View>
      </View>
    </View>
  )
}


export default CustomSlider;