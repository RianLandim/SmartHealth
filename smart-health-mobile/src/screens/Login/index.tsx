import React from "react";
import * as Google from "expo-auth-session/providers/google";
import {
  ContainerPage,
  FooterContainer,
  HeaderContainer,
  ImgLogoGoogle,
  InformationsContainer,
  LogoGoogle,
  LogoImage,
  SocialButton,
  SocialButtonText,
  SubTitleText,
  TitleText,
} from "./styles";
import logoGoogle from "../../assets/logo-google.png";
import LogoApp from "../../assets/ProjectLogo.png";
import { useGoogle } from "../../context/google-auth";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const { promptAsync } = useGoogle();
  const navigator = useNavigation();

  async function handleGoogle() {
    await promptAsync();
    navigator.navigate("mytabs" as never);
  }

  return (
    <ContainerPage>
      <HeaderContainer>
        <LogoImage style={{ width: 280, height: 280 }} source={LogoApp} />
      </HeaderContainer>

      <InformationsContainer>
        <TitleText>YOUR HEALTH APP</TitleText>
        <SubTitleText>SMART HEALTH</SubTitleText>
      </InformationsContainer>

      <FooterContainer>
        <SocialButton
          onPress={() => {
            navigator.navigate("mytabs" as never);
          }}
        >
          <LogoGoogle style={{ width: 24, height: 24 }} source={logoGoogle} />
          <SocialButtonText>Entrar com o google</SocialButtonText>
        </SocialButton>
      </FooterContainer>
    </ContainerPage>
  );
}
