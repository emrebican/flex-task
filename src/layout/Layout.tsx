import { Toaster } from "@/components/ui/Toaster/toaster";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray h-screen">
      <nav className="bg-flex_blue h-12 flex items-center sticky top-0">
        <h2 className="text-white font-semibold font-sans pl-5">Your Notes</h2>
      </nav>
      <main className="p-2.5">{children}</main>
      <Toaster />
    </div>
  );
};

export default Layout;
