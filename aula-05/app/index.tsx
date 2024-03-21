import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Image } from 'react-native'
import { router } from 'expo-router'
import { Input, InputField, Text, Button, ButtonText } from '@gluestack-ui/themed'
import { Entypo } from '@expo/vector-icons'
import { useState } from 'react'
import { IUserLogin } from '../interfaces/login'
import { useAuth } from '../hooks/auth'

export default function Login() {

  const auth = useAuth()

  return (
    <View style={styles.container}>
      
      <Text size='sm'>Tela de login</Text>

      <Input variant='outline' size='md' mb={8}>
        <InputField 
        placeholder='Digite o seu e-mail' 
        onChangeText={(texto) => auth.setUser({...auth.user, email: texto})} />
      </Input>

      <Input variant='outline' size='md' mb={8}>
        <InputField 
        type='password'
        onChangeText={(texto) => auth.setUser({...auth.user,password: texto})}
        placeholder='Digite a sua senha' />
      </Input>

      <Button onPress={auth.handleLogin} size='lg' variant='solid' action='primary'>
        <ButtonText>Acessar o app <Entypo name="login" size={24} color="black" /></ButtonText>
      </Button>

      <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo:{
    width: 100,
    height: 100
  }
});
