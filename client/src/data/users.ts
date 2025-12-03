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
    email:"ronak@steampro.in",
    password:"Ronak@12345",
    department:"sales",
    name:"Ronak Yadav"
  },
  {
    email:"sahil@steampro.in",
    password:"Sahil@12345",
    department:"sales",
    name:"Sahil Singh"
  },
  {
    email:"sc@steampro.in",
    password:"Sumir@12345",
    department:"sales",
    name:"Sumir"
  },
  {
    email:"arpit@steampro.in",
    password:"Arpit@12345",
    department:"sales",
    name:"Arpit"
  },
  {
    email:"kapil.prabhakar@steampro.in",
    password:"Kapil@12345",
    department:"sales",
    name:"Kapil"
  },
  {
    email:"arjav.dhawan@steampro.in",
    password:"Arjav@12345",
    department:"sales",
    name:"Arjav"
  },
  {
    email:"debajit.karmakar@steampro.in",
    password:"Debajit@12345",
    department:"sales",
    name:"Debajit"
  },
  {
    email:"sunny.kashyap@steampro.in",
    password:"Sunny@12345",
    department:"sales",
    name:"Sunny"
  },
  {
    email:"aryan.kumar@steampro.in",
    password:"Aryan@12345",
    department:"sales",
    name:"Aryan"
  },
  {
    email:"daizy.pruthi@steampro.in",
    password:"Daizy@12345",
    department:"sales",
    name:"Daizy Pruthi"
  },
  {
    email:"rishab.tyagi@steampro.in",
    password:"12345",
    department:"sales",
    name:"Rishab"
  },
  {
    email:"shivam.Sharma@steampro.in",
    password:"12345",
    department:"sales",
    name:"Shivam"
  },
  {
    email:"asif.khan@steampro.in",
    password:"12345",
    department:"sales",
    name:"Asif"
  },
  {
    email:"qurban.ali@steampro.in",
    password:"12345",
    department:"sales",
    name:"Qurban"
  }
];
