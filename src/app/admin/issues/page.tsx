"use client";

import IssueForm from "@/components/forms/IssueForm"
import ReturnBook from "@/components/forms/ReturnBook";
import IssueTable from "@/components/tables/IssueTable";

export default function IssuesPage(){
    return(
    <div className="space-y-6">
       <IssueForm /><br />
       <IssueTable/>
      
    </div>
);
}