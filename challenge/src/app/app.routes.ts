import { Routes } from "@angular/router";
import { MyFormComponent } from "./my-form/my-form.component";
import { SignUpComponent } from "./sign-up/sign-up.component";


const ROUTES: Routes = [
  { path: '', redirectTo: '/user-profile', pathMatch: 'full'},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'my-form', component: MyFormComponent},
];

export { ROUTES };