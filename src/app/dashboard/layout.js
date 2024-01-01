"use client";
import React from "react";
import MainHeader from "./components/MainHeader";
import MainSideBar from "./components/MainSiderBar";
import { Montserrat } from "next/font/google";
import { SidebarProvider } from "./components/SidebarContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function DashboardLayout({ children }) {
  return (
    <main className={montserrat.className}>
      <div className="w-full h-screen flex flex-row">
        <SidebarProvider>
          <MainSideBar />
          <div className="w-full flex flex-col">
            <MainHeader />
            <main className="w-full h-[87%] bg-gray-100">{children}</main>
          </div>
        </SidebarProvider>
      </div>
    </main>
  );
}
