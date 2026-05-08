export type Role="ADMIN"|"STUDENT";


export type User={
    id:string;
    name:string;
    email:string;
    phone:string;
    role:Role;
  
    createdAT:string;
    updatedAT:string;

    student?:Student;

};