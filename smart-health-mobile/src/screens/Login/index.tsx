import React from "react";
import { View, Text, Image } from "react-native";
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

export function Login() {
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
        <SocialButton>
          <LogoGoogle style={{ width: 24, height: 24 }} source={logoGoogle} />
          <SocialButtonText>Entrar com o google</SocialButtonText>
        </SocialButton>
      </FooterContainer>
    </ContainerPage>
  );
}
