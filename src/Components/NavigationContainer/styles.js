import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.secondary,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    paddingTop: 5,
    height: 90
  }
});


export default styles;