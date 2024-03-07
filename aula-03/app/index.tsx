import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Image } from 'react-native'
import { router } from 'expo-router'
import { Input, InputField, Text, Button, ButtonText } from '@gluestack-ui/themed'
import { AntDesign } from '@expo/vector-icons';

export default function Login() {
  const handleLogin = () => {
    router.push('home')
  }

  return (
    <View style={styles.container}>
      
      <Text size='sm'>Tela de login</Text>

      <Input variant='outline' size='md' mb={8}>
        <InputField placeholder='Digite o seu e-mail' />
      </Input>

      <Input variant='outline' size='md' mb={8}>
        <InputField type='password' placeholder='Digite a sua senha' />
      </Input>

      <Button onPress={handleLogin} size='lg' variant='solid' action='primary'>
        <ButtonText>Acessar o app <AntDesign name="login" size={24} color="black" /></ButtonText>
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
