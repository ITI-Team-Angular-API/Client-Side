export class LoginViewModel {

    public UserName : string;
    public Password : string;
    constructor(userName : string, password : string){
        this.UserName = userName;
        this.Password = password;
    }

}
