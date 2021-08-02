import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { LoginComponent } from './modules/auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './modules/auth/register/register.component';
import { HomeComponent } from './modules/home/home/home.component';
import { JwtInterceptor } from './shared/jwt.interceptor';
import { HomeService } from './services/home.service';
import { ProductsComponent } from './modules/auth/admin/products/products.component';
import { CreateComponent } from './modules/products/create/create.component';
import { ListComponent } from './modules/products/list/list.component';
import { EditComponent } from './modules/products/edit/edit.component';
import { CategoryComponent } from './modules/category/category.component';
import { ProductComponent } from './modules/products/product/product.component';
// import { RegisterComponent } from './modules/auth/register/modules/auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductsComponent,
    CreateComponent,
    ListComponent,
    EditComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    AuthService,StorageService,HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
