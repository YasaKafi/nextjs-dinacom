'use client';
import React from "react";
import MainHeader from "./components/MainHeader";
import MainSideBar from "./components/MainSiderBar";
import { Montserrat } from "next/font/google";
import { SidebarProvider } from "./components/SidebarContext";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const getPageTitle = () => {
    switch (pathname) {
      case "/dashboard/training":
        return "Progress Pelatihan";
      case "/dashboard/internship":
        return "Progress Magang";
      case "/dashboard/profile":
        return "Profil Pengguna";
      default:
        return "";
    }
  };
  return (
    <main className={montserrat.className}>
      <div className="w-full h-screen flex flex-row ">
        <SidebarProvider>
          <MainSideBar />
          <div className="w-full flex flex-col">
            <MainHeader getPageTitle={getPageTitle()} />
            <main className="w-full h-[87%] bg-white ">{children}</main>
          </div>
        </SidebarProvider>
      </div>
    </main>
  );
}
