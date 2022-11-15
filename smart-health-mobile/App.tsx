import React from "react"
import { GoogleAuthProvider } from "./src/context/google-auth";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <GoogleAuthProvider>
      <Routes />
    </GoogleAuthProvider>
  ) 
}

