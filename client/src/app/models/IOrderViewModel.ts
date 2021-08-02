@import{IPaymentMethodViewModel}from'src/app/models/IPaymentMethodViewModel'


{
    export interface IOrderViewModel
    {

         Id: number;
         DateTime: Date;
         totalPrice: number;
         userId: string;
         PaymentMethod: IPaymentMethodViewModel;
         appUser: any;
         OrderedProducts: any[];
    }
}




