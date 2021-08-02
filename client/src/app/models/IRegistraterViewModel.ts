


import { Injectable } from '@angular/core';
//import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { IRegisterViewodel } from 'src/app/models/IRegistraterViewModel'

    export interface IRegisterViewodel
    {

         UserName: string;
         Email: string;
         Password: string;
         ConfirmPassword: string;
    }





