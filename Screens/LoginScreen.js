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
      <Text style={styles.logo}>Jobizz</Text>
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
        <Text style={styles.registerText}>Haven’t an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F8FA',
    padding: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A3D46',
    marginBottom: 10,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A3D46',
  },
  subtitle: {
    fontSize: 16,
    color: '#A1A5B2',
    marginTop: 10,
    marginBottom: 30,
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
    backgroundColor: '#3A3D46',
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
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  registerText: {
    fontSize: 14,
    color: '#A1A5B2',
  },
});

export default LoginScreen;
