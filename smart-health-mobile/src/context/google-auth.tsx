import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import { useAuthRequest } from "expo-auth-session/providers/google"
import { AuthRequestPromptOptions, AuthSessionResult } from "expo-auth-session";
import api from "../service/http/api";

interface GoogleAuthContextProps {
  acessToken: string | undefined;
  promptAsync: (options?: AuthRequestPromptOptions | undefined) => Promise<AuthSessionResult>
}

interface GoogleAuthProviderProps {
  children: JSX.Element
}

const GoogleAuthContext = createContext<GoogleAuthContextProps>({} as GoogleAuthContextProps)

export const GoogleAuthProvider = ({ children } : GoogleAuthProviderProps) => {
  const [acessToken, setAcessToken] = useState<string | undefined>()
  
  const [request, response, promptAsync] = useAuthRequest({
    expoClientId: process.env.REACT_GOOGLE_CLIENT_ID,
    redirectUri: process.env.REACT_GOOGLE_REDIRECT_URI,
    scopes: ['https://www.googleapis.com/auth/fitness.activity.read']
  })

  useEffect(() => {
    if(response?.type === 'success') {
      const {authentication} = response;
      api.defaults.headers.common.authorization = `Bearer ${authentication?.accessToken}`
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