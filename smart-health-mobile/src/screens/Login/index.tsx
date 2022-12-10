import React, { useEffect, useState } from "react";
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
import LogoApp from "../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { useAuthRequest } from "expo-auth-session/providers/google";
import api from "../../service/http/api";

export function Login() {
  const navigator = useNavigation();

  const [acessToken, setAcessToken] = useState<string | undefined>();

  const [request, response, promptAsync] = useAuthRequest({
    expoClientId: process.env.REACT_GOOGLE_CLIENT_ID,
    redirectUri: process.env.REACT_GOOGLE_REDIRECT_URI,
    scopes: [
      "https://www.googleapis.com/auth/fitness.activity.read",
      "email",
      "profile",
    ],
  });

  if (response?.type === "success") {
    const { authentication } = response;
    api.defaults.headers.common.authorization = `Bearer ${authentication?.accessToken}`;
    setAcessToken(authentication?.accessToken);
    console.log(response);
  }

  async function handleGoogle() {
    await promptAsync();
    navigator.navigate("bottomNavigationBar" as never);
  }

  return (
    <ContainerPage>
      <HeaderContainer>
        <LogoImage style={{ width: 130, height: 130 }} source={LogoApp} />
      </HeaderContainer>

      <InformationsContainer>
        <TitleText>YOUR HEALTH APP</TitleText>
        <SubTitleText>SMART HEALTH</SubTitleText>
      </InformationsContainer>

      <FooterContainer>
        <SocialButton
          onPress={() => {
            handleGoogle();
          }}
        >
          <LogoGoogle style={{ width: 24, height: 24 }} source={logoGoogle} />
          <SocialButtonText>Entrar com o google</SocialButtonText>
        </SocialButton>
      </FooterContainer>
    </ContainerPage>
  );
}
