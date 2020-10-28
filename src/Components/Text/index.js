import React from 'react';
import { Text } from 'react-native';

const CustomText = (props) => {

  const styles = {
    ...props.typography,
    textAlign: props.center ? "center" : "left",
    ...props.style
  }

  return (
    <Text style={styles}>
      {props.children}
    </Text>
  );
}


export default CustomText;