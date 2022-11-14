import styled from "styled-components/native";

// ===> Config da página
export const ContainerPage = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

// ===> Config da header que possui a logo
export const HeaderContainer = styled.View`
  flex: 2;
  width: 100%;
  justify: flex-start;
  justify-content: center;
`;
export const LogoImage = styled.Image``;

// ===> Config da container que possui os textos
export const InformationsContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px 10%;
`;
export const TitleText = styled.Text`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  width: 70%;
  color: #f1f1f1;
`;
export const SubTitleText = styled.Text`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #f1f1f1;
`;

// ===> Config da footer com botão social
export const FooterContainer = styled.View`
  flex: 1;
  justify-container: center;
  align-items: center;
  margin-top: 10%;
`;
export const SocialButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border: 2px solid #b0b0b0;
  border-radius: 30px;
  padding: 4% 15%;
`;
export const LogoGoogle = styled.Image``;
export const SocialButtonText = styled.Text`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 15px;
  color: #2d2d2d;
`;
export const ImgLogoGoogle = styled.Image`
  width: 40px;
`;
