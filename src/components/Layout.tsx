import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import clsx from "clsx";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Layout = ({
  children,
  className,
  currentPageName,
}: {
  children: React.ReactNode;
  className?: string;
  currentPageName: string;
}) => {
  return (
    <div className="flex flex-col justify-between w-full min-h-screen">
      <Navbar />
      <div className="items-center justify-center lg:flex">
        <div className="p-4 w-auto lg:w-[800px]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{currentPageName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <main className={clsx("flex flex-1 h-full p-4", className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
