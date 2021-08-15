export class User1{
  id: number;
  userName: string;
  passWord: string;
  gender:string;
  lastName:string;
  firstName:string;
  role: string;
  adress:string;
  email: string;
  telephone:number;
  isEnabled:boolean;


constructor(gender: string,lastName: string, adress:string,firstName: string,userName: string, email: string, passWord: string,role:string,telephone:number,isEnabled:boolean) {
  this.lastName = lastName;
  this.firstName=firstName;
  this.userName = userName;
  this.email = email;
  this.passWord = passWord;
  this.role = role;
  this.adress=adress;
  this.gender=gender;
  this.telephone=telephone;
  this.isEnabled=isEnabled;}}