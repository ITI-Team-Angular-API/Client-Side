


{
    export interface IRegisterResponse 
    {       
         Id: string; ;
    }
}
{
    export interface ILoginRepsonse 
    {       
       
         Status: number;
         Message: string;
         Token: string;
         RefreshToken: string;
         UserName: string;
         UserId: string;
         IsAdmin: boolean;
    }
}
{
    export interface IAddAdmin 
    {       
       
         Status: number;
         Message: string;
    }
}


  export enum ResposeStatus 
    {
      Succeeded = 0,
      Failed = 1,
      Exception = 2,
    }


