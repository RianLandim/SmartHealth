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
    expoClientId: '599608998940-0foa5l32pvit86ko6nejgoojtn6l6mfi.apps.googleusercontent.com',
    redirectUri: 'https://auth.expo.io/@rianlandim/smart-health-mobile'
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
        <SocialButton>
          <LogoGoogle style={{ width: 24, height: 24 }} source={logoGoogle} />
          <SocialButtonText>Entrar com o google</SocialButtonText>
        </SocialButton>
      </FooterContainer>
    </ContainerPage>
  );
}
