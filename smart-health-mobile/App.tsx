import React from "react";
import { StatusBar } from "react-native";
import { QueryClientProvider } from "react-query";
import { GoogleAuthProvider } from "./src/context/google-auth";
import { Routes } from "./src/routes";
import { queryClient } from "./src/service/query-client";
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <GoogleAuthProvider>
        <Routes />
      </GoogleAuthProvider>
    </QueryClientProvider>
  );
}
