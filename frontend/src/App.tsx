import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./contexts/Auth";
import CustomRoutes from "./components/CustomRoutes";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <BrowserRouter>
      <div style={{ height: "100vh" }}>
        <ToastContainer />
        <AuthProvider>
          <CustomRoutes />
        </AuthProvider>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
