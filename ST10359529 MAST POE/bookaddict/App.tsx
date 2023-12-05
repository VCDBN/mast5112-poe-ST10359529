import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const HomePage = () => {

 const [lastBook, setLastBook] = useState({
  title: '',
  author: '',
  genre: '',
  pages: 0
 });

 const [totalPages, setTotalPages] = useState(0);
  const [NavOpen, setNavOpen] = useState(false);

  const SideNav = () => {
    setNavOpen(!NavOpen);
  };

 return (
  <View style={styles.container}>

    <TouchableOpacity onPress={SideNav}>
      <Image source={NavOpen ? require('./close.png') : require('./arrow.JPG')} style={styles.openclose}/>
    </TouchableOpacity>

    <View style={[styles.sideNav, { display: NavOpen ? 'flex' : 'none' }]}>
      <Image source={require('./BookHome.jpg')} style={styles.sideNavImage} />

      <Text style={styles.sideNavTitle}>Book Addicts</Text>

      {['Home Page', 'Last Book Read', 'Book History', 'Add New Book', 'Find a Book'].map(
      (item, index) => (
      <TouchableOpacity key={index} style={styles.sideNavItem}>
        <Text style={styles.sideNavText}>{item}</Text>
      </TouchableOpacity>
      )
      )}
    </View>
  </View>
 );
};

const styles = StyleSheet.create({
   container:{
      flex:1,
      flexDirection: 'row'
    },
    content:{
      flex:3,
    },
    Image:{
      flex:0.5,
    },
    title:{
      fontSize:38,
      fontWeight:'bold',
      color:'black',
      justifyContent:'center',
    },
    contentContainer:{
      flex:0.5,
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
    },
    PagesContainer:{
      flexDirection:'row',
      marginTop:30,
      marginRight:250,
    },
    AuthorContainer:{
      flexDirection:'row',
      marginTop:30,
      marginRight:335,
    },
    AuthorText:{
      fontSize:18,
      color:'black',
    },
    sideNav:{
      flex: 1,
      backgroundColor: '#F0F0F0', 
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingTop: 60, 
      paddingHorizontal: 10
    },
    sideNavItem:{
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#CCCCCC',
    },
    sideNavText:{
      fontSize: 18,
      color: 'black'
    },
    sideNavImage:{
      width: '103%', 
      height: 150,
      resizeMode: 'cover',
      marginBottom: 30, 
    },
    sideNavTitle:{
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    openclose:{
      width: 30, 
      height: 30, 
      resizeMode: 'contain',
      marginLeft: 10,
    },
});

export default HomePage;


// Reference list:
// - React native · learn once, write anywhere (no date) React Native RSS. 
// available at: https://reactnative.dev/ (Accessed: 26 October 2023). 