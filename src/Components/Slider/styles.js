import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  heading: {
    marginLeft: 5
  },
  sliderContainer: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  innerContainer: {
    marginTop: 13,
    alignItems: "center"
  },
  labelContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginBottom: -17
  },
  thumbStyle: {
    width: 15,
    height: 15,
    backgroundColor: theme.colors.primary,
    borderWidth: 1.5,
    borderColor: theme.colors.secondary
  }
});


export default styles;