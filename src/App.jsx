import React from 'react';
import AppRoutes from "./AppRoutes";

import { AuthProvider } from './contexts/Auth';


export function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App;
