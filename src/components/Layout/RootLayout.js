import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
