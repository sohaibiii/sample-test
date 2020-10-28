import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.secondary,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'absolute',
    bottom: 0,
    paddingTop: 5,
    height: 90,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default styles;
