import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponentComponent, SignupComponentComponent],
  exports:[LoginComponentComponent,LoginComponentComponent]
})
export class AuthModuleModule { }
