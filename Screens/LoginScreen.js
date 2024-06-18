import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Derrick </Text>
      <Text style={styles.welcome}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Let's log in. Apply to jobs!</Text>
      <TextInput 
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput 
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

    {/**the following code deals with the alignment of the continue button */}

      <View style={styles.inline}>
        <View style={styles.space1}></View>
        <Text style={styles.option}>Or continue with</Text>
        <View style= {styles.space2}></View>
      </View>
    {/*the end of the "continue with code" */}

      <View style={styles.socialLogin}>
        <TouchableOpacity>
          <Image source={require('../assets/images/iphone.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/images/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/images/facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.registerText}>Haven’t an account? <Text style={styles.register}>Register</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFD',
    padding: 20,
    paddingTop:20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#356899',
    marginBottom: 10,
    marginRight: 230,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A3D46',
    marginRight: 120,
  },
  subtitle: {
    fontSize: 16,
    color: '#A1A5B2',
    marginTop: 10,
    paddingBottom: 30,
    marginBottom: 30,
    marginRight:130,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#356899',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialLogin: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  socialIcon: {
    width: 100,
    height: 100,
    marginHorizontal: 1,
  },
  registerText: {
    fontSize: 14,
    color: '#A1A5B2',
  },

  inline:{
    flexDirection: "row",
    alignItems: "center",
  },

  option:{
    color: "gray",
   marginButton: 50,
   padding: 20,
   
  },

  space1:{
    borderWidth:0.1,
    width:100,
    borderColor:"#D1D5DB",
  },
  space2:{
    borderWidth:0.1,
    width: 100,
    borderColor:"#D1D5DB",
  },

  register:{
    fontSize: "14",
    color: "#356899",
  }
 
});

export default LoginScreen;
