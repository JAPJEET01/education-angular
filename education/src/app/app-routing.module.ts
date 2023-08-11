import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';

const routes: Routes = [
  {path:"",redirectTo:"/layout/home",pathMatch:"full"},
  {path:"layout" , component:LayoutComponent,
children:[
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"cources", component:CoursesComponent},
  {path:"blog", component:BlogComponent},
  {path:"contact", component:ContactComponent},
  {path:"login", component:LoginComponent},
  {path:"join", component:JoinComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
