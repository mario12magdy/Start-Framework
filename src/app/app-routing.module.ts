import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import * as path from 'path';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [

  {path:"", component: HomeComponent , title :"START FRAMEWORK"},
  {path:"home", component: HomeComponent , title :"START FRAMEWORK"},
  {path:"about", component: AboutComponent , title :"About"},
  {path:"portfolio", component: PortfolioComponent , title :"Portfolio"},
  {path:"contact", component: ContactComponent , title :"Contact"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
