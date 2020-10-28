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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
});

export default styles;
