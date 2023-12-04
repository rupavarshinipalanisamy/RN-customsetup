import {
    View,
    StyleSheet,
  } from 'react-native';
  import styled from 'styled-components';
  
  const styles = StyleSheet.create({
    
    WhiteBg: {
      flex: 1,
      backgroundColor:'white'
    },

  });
  const {
    WhiteBg,
   } = styles;
  

  export const MainContainer = styled(View)`
    ${ WhiteBg}`
 

  