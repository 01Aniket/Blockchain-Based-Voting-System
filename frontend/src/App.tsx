import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import AuthProvider from "./contexts/Auth";
import CustomRoutes from "./components/CustomRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ height: "100vh" }}>
        <AuthProvider>
          <CustomRoutes />
        </AuthProvider>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
