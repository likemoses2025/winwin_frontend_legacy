import {StyleSheet, Platform, StatusBar} from 'react-native';

//**************************************//
//****************Color*****************//
//**************************************//

export const colors = {
  color1: '#c70049',
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
