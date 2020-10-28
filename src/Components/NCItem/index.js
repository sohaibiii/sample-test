import React from 'react';
import {View} from 'react-native';
import theme from '../../theme';
import Text from '../Text';
import styles from './styles';

const NCItem = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.iconContainer,
          props.active && {
            backgroundColor: theme.colors.primary,
            borderRadius: 25,
          },
        ]}>
        {props.icon}
      </View>
      <Text
        typography={theme.typography.navTitle}
        style={{
          color: props.active ? theme.colors.primary : theme.colors.gray,
          paddingTop: 5,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default NCItem;
