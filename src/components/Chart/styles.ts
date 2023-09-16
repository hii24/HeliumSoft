import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 40,
  },
  wrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderColor: '#DADEE3',
    marginLeft: 10,
    flexDirection: 'row',
  },
  items: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  containerBar: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
    marginBottom: -30,
  },
  yAxisScaleContainer: {
    alignItems: 'flex-end',
    flexDirection: 'column-reverse',
  },
  yAxisValue: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  yAxisValueText: {
    fontWeight: '600',
    color: '#6D5FFD',
    fontSize: 14,
  },
  year: {
    position: 'absolute',
    width: 40,
    zIndex: 3,
    transform: [{rotate: '-45deg'}],
    fontWeight: '600',
    color: '#6D5FFD',
    fontSize: 14,
  },
  line: {
    position: 'absolute',
    height: 1,
    width: '100%',
    left: 0,
    backgroundColor: '#DADEE3',
    zIndex: -1,
  },
});
