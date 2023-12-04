//import liraries
import { Text, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { alignItemsCenter, alignSelfCenter, justyfyCenter, letterSpacing03, letterSpacing04, txtCenter } from './commonStyles';
import { colors } from '../colors';

const styles = StyleSheet.create({
  black: {
    color:colors.black
  },
  h1: {
    fontSize: 25,
  },
  h2: {
    fontSize: 36,
  },
  h3: {
    fontSize: 24,
  },
  h4: {
    fontSize: 21,
  },
  h5: {
    fontSize: 20,
  },
  h6: {
    fontSize: 18,
  },
  h7: {
    fontSize: 16,
  },
  h8: {
    fontSize: 15,
  },
  h9: {
    fontSize: 14,
  },
  h10: {
    fontSize: 12,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  fontBold400: {
    fontWeight: '400',
  },
  fontRegular: {
    fontWeight: '500',
  },
  fontBold600: {
    fontWeight: '600',
  },
  fontBold700: {
    fontWeight: '700',
  },
  fontBold800: {
    fontWeight: '800',
  },
  fontBold900: {
    fontWeight: '900',
  },
  fontNormal: {
    fontWeight: 'normal'
  },


});
const {  black} = styles;
const { fontBold, fontRegular, fontBold400, fontBold600, fontBold700, fontBold800, fontNormal, fontBold900 } = styles;
const {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  h8,
  h9,
  h10

} = styles;

export const H16BlackText = styled(Text)`
  ${h7};
  ${black};
`;







