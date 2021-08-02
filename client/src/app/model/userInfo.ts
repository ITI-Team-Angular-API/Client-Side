export class UserInfo {

    public name : string;
    public userId : string;
    public isAdmin : boolean = false ;
    public isAuthenticated : boolean = false;

    constructor(name : string, userId : string,isAdmin:boolean){
        this.name = name;
        this.userId = userId;
        this.isAdmin = isAdmin;

    } 
}