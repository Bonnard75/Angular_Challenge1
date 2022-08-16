import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { ValidationButtonComponent } from './validation-button/validation-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidationButtonComponent,
    UserProfileComponent,
    SignupComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }