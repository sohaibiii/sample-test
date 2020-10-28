import React from 'react';
import { View } from 'react-native';
import theme from '../../theme';
import Text from "../Text";
import styles from "./styles";

const CustomButton = (props) => {

  return (
    <View style={[styles.button, {backgroundColor: props.primary ? theme.colors.primary : theme.colors.gray}]}>
      <Text typography={theme.typography.subHeading} style={{fontSize: 12}}>
        {props.title}
      </Text>
    </View>
  );
}


export default CustomButton;