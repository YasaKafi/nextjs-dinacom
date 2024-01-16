import React from "react";
import jobDetail from "@/app/lib/services/endpoint/api/job-detail";

export default async function DetailPageArticle({params}) {
    const id = params.id;

    return(
        <>
            Tes{id}

        </>
    );
}