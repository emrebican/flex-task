import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray h-screen">
      <nav className="bg-flex_blue h-12 flex items-center">
        <h2 className="text-white font-semibold font-sans pl-5">Your Notes</h2>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
