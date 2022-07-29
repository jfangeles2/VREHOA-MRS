import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintsComponent } from '../complaints/complaints.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: 'app', component: MainComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'complaints', component: ComplaintsComponent },
      { path: 'expenses', component: ComplaintsComponent },
      { path: 'income', component: ComplaintsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
