import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center p-4 my-3">{children}</main>
    </>
  );
};

export default Layout;
