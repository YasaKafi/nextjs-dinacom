
import React from "react";
import MainHeader from "./components/MainHeader";
import MainSideBar from "./components/MainSiderBar";
import { Montserrat } from "next/font/google";
import { SidebarProvider } from "./components/SidebarContext";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");
  return (
    <main className={montserrat.className}>
      <div className="w-full h-screen flex flex-row ">
        <SidebarProvider>
          <MainSideBar />
          <div className="w-full flex flex-col">
            <MainHeader getPageTitle={activePath} />
            <main className="w-full h-[87%] bg-white ">{children}</main>
          </div>
        </SidebarProvider>
      </div>
    </main>
  );
}
