import { Routes } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const ROUTES: Routes = [
  { path: '', redirectTo: '/user-profile', pathMatch: 'full'},
  { path: 'signup', component: SignupComponent},
  { path: 'user-profile', component: UserProfileComponent},
];

export { ROUTES };