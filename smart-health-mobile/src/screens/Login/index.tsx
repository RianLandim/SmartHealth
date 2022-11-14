import React from "react";
import { Container, Title, FormContainer,SocialMediaContainer } from "./styles";
import * as Google from "expo-auth-session/providers/google"
import { TouchableOpacity, Text } from "react-native";

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
    <Container >
      <Title >Smart Health</Title>
      <FormContainer>
        
      </FormContainer>
      <SocialMediaContainer>
        <TouchableOpacity onPress={() => promptAsync()}>
          <Text>
          Login com Google
          </Text>
        </TouchableOpacity>
      </SocialMediaContainer>      
    </Container>
  );
}
