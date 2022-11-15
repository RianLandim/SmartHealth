import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import * as Google from "expo-auth-session/providers/google"
import { AuthRequestPromptOptions, AuthSessionResult } from "expo-auth-session";

interface GoogleAuthContextProps {
  acessToken: string | undefined;
  promptAsync: (options?: AuthRequestPromptOptions | undefined) => Promise<AuthSessionResult>
}

const GoogleAuthContext = createContext<GoogleAuthContextProps>({} as GoogleAuthContextProps)

export const GoogleAuthProvider = (children : JSX.Element) => {
  const [acessToken, setAcessToken] = useState<string | undefined>()
  
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: process.env.REACT_GOOGLE_CLIENT_ID,
    redirectUri: process.env.REACT_GOOGLE_REDIRECT_URI
  })

  useEffect(() => {
    if(response?.type === 'success') {
      const {authentication} = response;
      setAcessToken(authentication?.accessToken);
    }
  }, [response])

  const memoedValue = useMemo(() => ({acessToken, promptAsync}), [acessToken])

  return (
    <GoogleAuthContext.Provider value={memoedValue}>
      {children}
    </GoogleAuthContext.Provider>
  )

}

export function useGoogle() {
  const {acessToken, promptAsync} = useContext(GoogleAuthContext)
  return {acessToken, promptAsync}
}