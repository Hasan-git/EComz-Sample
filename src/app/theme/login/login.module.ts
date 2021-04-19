import { AuthPublicGuard } from '../../blocks/core/auth-public-guard.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderModule } from '../../blocks/reusable-components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SharedMaterialModule } from 'src/app/blocks/common/shared-material.module';


const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthPublicGuard] }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedMaterialModule,
    CommonModule,
    HeaderModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
