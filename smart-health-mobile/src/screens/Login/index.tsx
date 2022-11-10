import React from "react";
import { View, Text, Image } from "react-native";
import { Container, Title } from "./styles";
import logoGoogle from '../../assets/logo-google.png';

export function Login() {
  return (
    <Container >
      <Title >Smart Health</Title>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aliquid illo fugiat. Vero eligendi expedita asperiores et veritatis a </Text>
      <View >
        <Text>Entrar com o google</Text>
      <Image  source={logoGoogle}/>
        </View>
    </Container>
  );
}
