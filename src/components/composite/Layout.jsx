import React from "react";
import { Header } from "@/components/composite/index";
import Head from "next/head";
const Layout = ({ children, footer = true, footerLight = false }) => {
  return (
    <>
      <Head>
        <title>Books</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
