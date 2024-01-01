"use client"
import React from "react";
import MainHeader from "./components/MainHeader";
import MainSideBar from "./components/MainSiderBar";
import { Montserrat } from "next/font/google";
import { SidebarProvider } from "./components/SidebarContext";
import PelatihanPage from "./training/page";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Dashboard({ children }) {
  return (
    <main className={montserrat.className}>
      <h1>Hahhaha</h1>
    </main>
  );
}
