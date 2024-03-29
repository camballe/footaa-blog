import React from "react";
import Header from "./Header";
import Meta from "./Meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      {children}
    </>
  );
}
