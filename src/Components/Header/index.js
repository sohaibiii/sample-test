import React from 'react';
import { View, Image } from 'react-native';
import Text from "../Text";
import Menu from "../../assets/menu.svg";
import RightArrow from "../../assets/right-arrow.svg"
import theme from "../../theme";
import styles from "./styles";

const Header = ()=> {
  return (
    <View style={styles.mainContainer}>
      <Menu style={styles.menuBtn} width={36} height={18} />
      <Text
        typography={theme.typography.heading}
      >Symptoms Tracker</Text>
      <View style={styles.leftContainer}>
        <Text
          color={theme.colors.secondary}
          typography={theme.typography.subHeading}
        >22 Sep</Text>
        <RightArrow style={styles.arrowBtn} width={16} height={8} />
      </View>
    </View>
  )
}


export default Header;