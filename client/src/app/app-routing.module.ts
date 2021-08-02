import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './modules/products/create/create.component';
import { ProductsComponent } from './modules/auth/admin/products/products.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ListComponent } from './modules/products/list/list.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './modules/products/product/product.component';
import { CategoryComponent } from './modules/category/category.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'productlist',component:ListComponent},
  {path:'createProduct',component:CreateComponent},
  {path:'Product',component:ProductComponent},
  {path:'Category',component:CategoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
