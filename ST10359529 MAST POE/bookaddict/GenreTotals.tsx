import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Display = () => {
  const [genreCounts, setGenreCounts] = useState({});
  const [NavOpen, setNavOpen] = useState(false);

  const Data = () => {
    const books = BookGenres();
    const counts = {};
    books.forEach((book) => {
      counts[book.genre] = (counts[book.genre] || 0) + 1;
    });
    setGenreCounts(counts);
  };

 Data();

  const SideNav = () => {
    setNavOpen(!NavOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={SideNav}>
        <Image source={NavOpen ? require('./close.png') : require('./arrow.JPG')} style={styles.openclose}/>
      </TouchableOpacity>

      <View style={[styles.Navigation, { display: NavOpen ? 'flex' : 'none' }]}>
        <Image source={require('./BookHome.jpg')} style={styles.logo} />

        <Text style={styles.Title}>Book Addicts</Text>

        {['Home Page', 'Last Book Read', 'Book History', 'Add New Book', 'Find a Book'].map(
          (item, index) => (
            <TouchableOpacity key={index} style={styles.sideNavItem}>
              <Text style={styles.sideNavText}>{item}</Text>
            </TouchableOpacity>
          )
        )}
      </View>

      <Text style={styles.heading}>Total Books Read for each Genre</Text>
      {Object.entries(genreCounts).map(([genre, count]) => (
        <View key={genre} style={styles.Item}>
          <Text style={styles.genreName}>{genre}</Text>
          <Text style={styles.genreCount}>{count}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
 },
 heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
 },
 Item: {
    flexDirection: 'row',
    width: '80%',
    marginBottom: 10,
 },
 genreName: {
    fontSize: 18,
 },
 genreCount: {
    fontSize: 18,
    fontWeight: 'bold',
 },
 Navigation:{
  flex: 1, 
   justifyContent: 'flex-start',
 },
 sideNavText:{
  fontSize: 18,
  color: 'black'
 },
 sideNavItem:{
  paddingVertical: 15,
  borderBottomWidth: 1,
  borderBottomColor: '#CCCCCC',
 },
 Title:{
  fontSize: 24,
  textAlign: 'center',
  marginBottom: 20,
 },
 logo:{
  width: '103%', 
  height: 150,
  marginBottom: 30, 
 },
 openclose:{
  width: 30, 
  height: 30, 
  resizeMode: 'contain',
  marginLeft: 10,
 }
});

export default Display;