import React, { ReactNode } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavbarMobileView from "../../components/Navbar/NavbarMobileView";
import Footer from "../../components/Footer/Footer";

interface IPropsPageLayout {
  children: ReactNode;
}

const PageLayout = ({ children }: IPropsPageLayout) => {
  return (
    <React.Fragment>
      <Navbar />
      <NavbarMobileView />
      {children}

      <Footer />
    </React.Fragment>
  );
};

export default PageLayout;
