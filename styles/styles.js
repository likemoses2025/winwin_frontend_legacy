import {StyleSheet, Platform, StatusBar} from 'react-native';

//**************************************//
//****************Color*****************//
//**************************************//

export const colors = {
  color1: '#E86000',
  color1_light: 'rgba(227,25,99,1)',
  color1_light2: 'rgba(199,0,73,0.8)',
  color2: 'white',
  color3: 'rgb(45,45,45)',
  color4: 'transparent',
  color5: '#f2f2f2',
  color6: '#f7f7f7',
  color7: '#fafafa',
  color8: '#e0e0e0',
};

//**************************************//
//****************Commom*****************//
//**************************************//
export const defaultStyle = StyleSheet.create({
  padding: 35,
  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  flex: 1,
  backgroundColor: colors.color2,
});

//**************************************//
//************Return Page***************//
//**************************************//

export const returnContainer = StyleSheet.create({
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 10,
  paddingHorizontal: 30,
  backgroundColor: colors.color2,
  paddingVertical: 30,
  marginBottom: 20,
});

export const customInputStyle = StyleSheet.create({
  height: 35,
  width: 150,
  borderWidth: 0.5,
  padding: 3,
  borderRadius: 5,
  borderColor: colors.color8,
  backgroundColor: colors.color2,
  top: 10,
  marginBottom: 10,
});

export const returnTitle = StyleSheet.create({
  fontSize: 20,
  fontWeight: 900,
  justifyContent: 'center',
  alignItems: 'center',
});

export const plusIcon = StyleSheet.create({
  position: 'absolute',
  bottom: '5%',
  right: '5%',
  justifyContent: 'center',
  alignItems: 'center',
  width: 50,
  height: 50,
  borderRadius: 50,
  backgroundColor: '#ff7d0d',
});

export const inputStyling = StyleSheet.create({
  height: 50,
  backgroundColor: colors.color2,
  marginVertical: 10,
  marginHorizontal: 20,
});

export const formHeading = {
  fontSize: 25,
  fontWeight: '500',
  textAlign: 'center',
  backgroundColor: colors.color3,
  color: colors.color2,
  padding: 5,
  borderRadius: 5,
};

export const inputOptions = {
  style: inputStyling,
  mode: 'outlined',
  activeOutlineColor: colors.color1,
};

export const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.color3,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10,
  },

  forget: {
    color: colors.color2,
    marginHorizontal: 20,
    marginVertical: 10,
    alignSelf: 'flex-end',
    fontWeight: '100',
  },

  btn: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 6,
  },

  or: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '100',
    color: colors.color2,
  },

  link: {
    alignSelf: 'center',
    color: colors.color2,
    fontSize: 18,
    textTransform: 'uppercase',
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export const defaultImg =
  'https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519_960_720.jpg';
