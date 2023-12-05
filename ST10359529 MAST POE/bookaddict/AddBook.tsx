import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const AddBook = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('Genre');
  const [pages, setPages] = useState('');
  const [NavOpen, setNavOpen] = useState(false);

  const SideNav = () => {
    setNavOpen(!NavOpen);
  };

  const Save = () => {
    const Title = title;
    const Author = author;
    const Genre = genre;
    const Pages = parseInt(pages);

    const update = { title: Title, author: Author, genre: Genre, pages: Pages };

    setTitle('');
    setAuthor('');
    setGenre('Genre');
    setPages('');
  };

  return (
    <View style={styles.container}>

    <TouchableOpacity onPress={SideNav}>
      <Image source={NavOpen ? require('./close.png') : require('./arrow.JPG')} style={styles.openclose} />
    </TouchableOpacity>

    <View style={[styles.sideNav, { display: NavOpen ? 'flex' : 'none' }]}>
    <View style={styles.sideNav}>

      <Image source={require('./BookHome.jpg')} style={styles.sideNavImage}/>

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

      <View style={styles.inputScreen}>
        <Text>Add New Books!</Text>
        <Text style={styles.AuthorText}>Title Of Book</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
        <Text style={styles.AuthorText}>Author Name</Text>
        <TextInput
          style={styles.input}
          value={author}
          onChangeText={setAuthor}
        />
        <Text style={styles.AuthorText}>Number of Pages</Text>
        <TextInput
          style={styles.input}
          value={pages}
          onChangeText={setPages}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AuthorText:{
    fontSize:18,
    color:'black',
  },
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
 },
 homeScreen: {
    alignItems: 'center',
    marginBottom: 20,
 },
 inputScreen: {
    alignItems: 'center',
 },
 input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
 },
 toggleButton:{
   width: 30, 
   height: 30, 
   resizeMode: 'contain',
   marginLeft: 10,
 },
 sideNav:{
   flex: 1,
   backgroundColor: '#F0F0F0', 
   alignItems: 'flex-start',
   justifyContent: 'flex-start',
   paddingTop: 60, 
   paddingHorizontal: 10
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
 sideNavItem:{
   paddingVertical: 15,
   borderBottomWidth: 1,
   borderBottomColor: '#CCCCCC',
 },
 sideNavText:{
   fontSize: 18,
   color: 'black'
 },
 openclose:{
  
 }
});

export default AddBook;