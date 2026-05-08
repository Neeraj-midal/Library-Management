export type IssueStatus = "ISSUED" | "RETURNED" ;

export type Issue = {
  id: string;
  userId: string;
bookId: string;

  issueDate: string;
  dueDate: string;
  returnDate?: string;
 
  status: IssueStatus;
fine:number;


  createdAT: string;
  updatedAT: string;
};
