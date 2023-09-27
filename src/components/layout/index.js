import React from "react";
import PageHeader from "./header";

function Layout({ children }) {
  return (
    <div className="layout">
      <PageHeader />
      <main className="content">
        {/* Content */}
        {children}
      </main>
    </div>
  );
}

export default Layout;
