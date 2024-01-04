import React from "react";
import { Montserrat } from "next/font/google";



const montserrat = Montserrat({ subsets: ["latin"] });

export default function Dashboard({ children }) {
  return (
    <main className={montserrat.className}>
      <h1>Hahhaha</h1>
      
    </main>
  );
}
