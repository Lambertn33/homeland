import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-white max-w-[90rem] mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
