import React from "react";
import * as Google from "expo-auth-session/providers/google"
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
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: process.env.REACT_GOOGLE_CLIENT_ID,
    redirectUri: process.env.REACT_GOOGLE_REDIRECT_URI
  })


    React.useEffect(() => {
      if(response?.type === 'success') {
        const {authentication} = response;
        console.log(authentication)
      }
    }, [response])

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
        <SocialButton onPress={() => promptAsync()}>
          <LogoGoogle style={{ width: 24, height: 24 }} source={logoGoogle} />
          <SocialButtonText>Entrar com o google</SocialButtonText>
        </SocialButton>
      </FooterContainer>
    </ContainerPage>
  );
}
