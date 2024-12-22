import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Register () {
  return (
    <View style={styles.container}>
      <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
      />
      <Text style={styles.title}>Seja Bem-Vindo</Text>
      <Text style={styles.subtitle}>Acesse sua conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Insira seu email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Insira sua senha"
        secureTextEntry
      />

    <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
      <Image
          source={require('@/assets/images/google-logo.png')}
          style={styles.google}
      />
      <Text style={styles.googleButtonText}>Entrar com Google</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Ainda não possui uma conta? </Text>
        <TouchableOpacity>
          <Text style={styles.registerText}>Registrar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.contactText}>fale-conosco</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 80,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#002B55',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  googleButton: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 20,
  },
  googleButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
  registerText: {
    color: '#6E44FF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  contactText: {
    color: '#6E44FF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  google: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
  }
});
