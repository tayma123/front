export class SignUpInfo {
    lastName: string;
    firstName: string;
    userName: string;
    email: string;
    role: string;
    passWord: string;
    adress:string;
    gender:string;
    telephone:number;
    
    

    constructor(gender: string,lastName: string, adress:string,firstName: string,userName: string, email: string, passWord: string,role:string,telephone:number) {
        this.lastName = lastName;
        this.firstName=firstName;
        this.userName = userName;
        this.email = email;
        this.passWord = passWord;
        this.role = role;
        this.adress=adress;
        this.gender=gender;
        this.telephone;
    }
}
