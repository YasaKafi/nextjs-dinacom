import React from "react";
import MainHeader from "./components/MainHeader";
import MainSideBar from "./components/MainSiderBar";
import { Montserrat } from "next/font/google";
import { SidebarProvider } from "./components/SidebarContext";
import MenuCS from "./components/menu-cs"

const montserrat = Montserrat({ subsets: ["latin"] });

export default function DashboardLayout({ children }) {
  return (
    <main className={montserrat.className}>
      <div className="w-full h-screen flex flex-row ">
        <SidebarProvider>
          <MainSideBar />
          <div className="w-full relative flex flex-col">
            <MainHeader />
            <main className="w-full h-[87%] bg-white ">{children}</main>
            <div className="absolute bottom-0 right-0 mb-8 mr-14 z-50">
              <MenuCS />
            </div>
          </div>
        </SidebarProvider>
      </div>
    </main>
  );
}
