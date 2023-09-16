import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
  },
  topBackground: {
    width: '100%',
    height: '30%',
    backgroundColor: '#6D5FFD',
    position: 'absolute',
    top: 0,
  },
  title: {
    fontSize: 20,
    color: '#6D5FFD',
    fontWeight: '600',
  },
  contentContainer: {
    width: '95%',
  },
  infoContainer: {
    marginTop: 30,
    alignItems: 'center',
    borderWidth: 1.7,
    borderColor: '#6D5FFD',
    padding: 20,
    paddingLeft: 0,
    borderRadius: 16,
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
