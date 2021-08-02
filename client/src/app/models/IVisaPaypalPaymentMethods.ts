
@import{IVisaViewModel}from'src/app/models/IVisaViewModel'
@import{IPaypalViewModel}from'src/app/models/IPaypalViewModel'



    export interface IVisaPaypalPaymentMethods
    {

         visa: IVisaViewModel;
         paypal: IPaypalViewModel;
         PaymentMethod: string;
    }





