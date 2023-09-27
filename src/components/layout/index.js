import React from "react";
import PageHeader from "./header";

function Layout({ children }) {
  return (
    <div className="layout">
      <PageHeader />
      <main className="content">{children}</main>
    </div>
  );
}

export default Layout;
