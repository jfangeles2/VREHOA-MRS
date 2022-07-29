import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [MainComponent, SidenavComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
