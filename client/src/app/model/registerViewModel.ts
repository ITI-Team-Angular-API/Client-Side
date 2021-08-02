export class RegisterViewModel {
    public email :string;
    public userName : string;
    public password : string;
    public confirmPassword : string;

    constructor(email:string,userName : string, password : string,confirmPassword:string){
        this.email=email;
        this.userName = userName;
        this.password = password;
        this.confirmPassword=confirmPassword

    } 

}