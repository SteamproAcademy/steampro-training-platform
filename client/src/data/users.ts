export interface User {
  email: string;
  password: string;
  department: "sales" | "ops" | "marketing" | "finance" | "manufacturing";
  name: string;
}

export const users: User[] = [
  {
    email: "yuvraj.kumar@steampro.in",
    password: "12345",
    department: "sales",
    name: "Yuvraj Kumar"
  },
  {
    email: "rahul.sharma@steampro.in",
    password: "abcd1234",
    department: "ops",
    name: "Rahul Sharma"
  },
  {
    email: "anita.verma@steampro.in",
    password: "pass5678",
    department: "marketing",
    name: "Anita Verma"
  },
  {
    email:"pc@steampro.in",
    password:"Pc@12345",
    department:"sales",
    name:"Pravir Chadha"
  },
  {
    email: "navratan.singh@steampro.in",
    password: "Navratan@12345",
    department:"sales",
    name:"Navratan Singh"
  },
  {
    email: "kartik@steampro.in",
    password:"Kartik@12345",
    department:"sales",
    name:"Navratan"
  },
  {
    email:"kishor.das@steampro.in",
    password:"Kishor@12345",
    department:"sales",
    name:"Kishor"
  }
];
