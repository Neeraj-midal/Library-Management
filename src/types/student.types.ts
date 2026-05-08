export type StudentStatus = "ACTIVE" | "INACTIVE" | "SUSPENDED";

export type Student = {
  id: string;
  userId: string;

  name: string;
  email: string;
  phone: string;
  adress: string;

  course: string;
  year: string;
  rollNumber: string;

  admissionDate: string;
  status: StudentStatus;

  createdAT: string;
  updatedAT: string;
};
