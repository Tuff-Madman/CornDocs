import { DarkmodeContext } from "#/context/darkmodeContext";
import { SidebarContext } from "#/context/sidebarContext";
import Nav from "#/ui/layout/nav/Nav";
import Sidebar from "#/ui/layout/sidebar/Sidebar";
import React, { useContext, useEffect } from "react";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

function Layout({ children }: LayoutProps) {
  /* @ts-ignore */
  const { darkmode } = useContext(DarkmodeContext);
  /* @ts-ignore */
  const { sidebar } = useContext(SidebarContext);

  return (
    <div className={`${darkmode && "dark"}`}>
      <div className="relative flex min-h-screen w-full flex-col items-center dark:bg-slate-900">
        <Nav />
        <div className="z-10 w-full max-w-[90rem] flex-1 px-4 sm:px-6 md:px-8">
          <Sidebar />
          <main className={`${sidebar && "lg:pl-[19.5rem]"}`}>{children}</main>
        </div>
        <div className="fixed top-16 h-48 w-full opacity-50">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-slate-900" />
        </div>
      </div>
    </div>
  );
}

export default Layout;
