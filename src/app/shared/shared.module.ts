import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';

@NgModule({
  declarations: [HeaderComponent, BreadCrumbComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HeaderComponent,BreadCrumbComponent]
})
export class SharedModule { }
