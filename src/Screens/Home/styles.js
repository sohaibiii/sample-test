import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: theme.colors.primary,
    flexGrow: 1,
    paddingBottom: 90,
  },
  mainHeader: {
    backgroundColor: theme.colors.primary,
   
  },
  mainContainer: {
    height:'100%',
    backgroundColor: theme.colors.secondary,
    borderTopLeftRadius: 70,
  },
  typesContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  infoContainer: {
    marginTop: 25,
    marginHorizontal: 35,
  },
  infoTop: {
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  rowContainer: {
    flexDirection: 'row',
  },
});

export default styles;
