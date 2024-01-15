import React from "react";
import DetailHero from "./detail-component/detail-hero";
import DetailDescription from "./detail-component/detail-description";

export default async function DetailPage({params}) {
    
    return(
        <>
            <DetailHero />
            <DetailDescription/>
        </>
    );
}