import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import clsx from "clsx";

const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex flex-col justify-between w-full min-h-screen">
      <Navbar />
      <main className={clsx("flex flex-1 h-full p-4", className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
