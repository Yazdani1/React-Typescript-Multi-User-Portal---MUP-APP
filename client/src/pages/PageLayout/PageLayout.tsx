import React, { ReactNode } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavbarMobileView from "../../components/Navbar/NavbarMobileView";

interface IPropsPageLayout {
  children: ReactNode;
}

const PageLayout = ({ children }: IPropsPageLayout) => {
  return (
    <React.Fragment>
      <Navbar />
      <NavbarMobileView />
      {children}
    </React.Fragment>
  );
};

export default PageLayout;
