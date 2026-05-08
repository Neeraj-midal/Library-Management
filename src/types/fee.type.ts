export type FeeStatus = "PAID" | "PENDING" | "OVERDUE";

export type Student = {
  id: string;
  userId: string;

  amount: string;
  dueDate: string;

  status: FeeStatus;
  lastAlert?: string;

  createdAT: string;
  updatedAT: string;
};
