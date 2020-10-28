import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    marginRight: 15,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.secondary,
    width: 60,
    height: 60,
    borderRadius: 30
  },
  typeTitle: {
    marginVertical: 5
  }
});


export default styles;