import React from 'react';
import { View } from 'react-native';
import theme from '../../theme';
import Text from "../Text";
import styles from "./styles";

const TypeContainer = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.iconContainer, props.active && {backgroundColor: theme.colors.primary, borderColor: theme.colors.secondary, borderWidth: 3.5}]}>
        {props.icon}
      </View>
      <Text
        style={styles.typeTitle}
        typography={theme.typography.subHeading}
      >
        {props.title}
      </Text>
    </View>
  )
}


export default TypeContainer;