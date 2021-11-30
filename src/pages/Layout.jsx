import React from "react";
import Navigation from "./Navigation";
import Navbar from "./partial/Navbar";
import { useLocation } from "react-router-dom";

const Layout = () => {
  let location = useLocation();

  const footerNavbar = () => {
    if (location.pathname === "/dine-menu" || location.pathname === "/menu") {
      return (
        <div
          style={{
            //   background:'#fff',
            position: "fixed",
            left: "0",
            bottom: "15px",
            height: "60px",
            width: "100%",
            zIndex: 21,
          }}
        >
          <Navbar />
        </div>
      );
    }
  };
  return (
    <React.Fragment>
      <Navigation />
      {/* {location && location.pathname === "/dine-menu" && (
        <div
          style={{
            //   background:'#fff',
            position: "fixed",
            left: "0",
            bottom: "15px",
            height: "60px",
            width: "100%",
            zIndex: 21,
          }}
        >
          <Navbar />
        </div>
      )} */}
      {footerNavbar()}
    </React.Fragment>
  );
};

export default Layout;
