import React from "react";
import { QueryClientProvider } from "react-query";
import { GoogleAuthProvider } from "./src/context/google-auth";
import { Routes } from "./src/routes";
import { queryClient } from "./src/service/query-client";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleAuthProvider>
        <Routes />
      </GoogleAuthProvider>
    </QueryClientProvider>
  );
}
