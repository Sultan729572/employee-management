import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin.component';
import { MaterialDesign } from '../material/material';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

// route link
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { animation: 'dashboard' }
      },
      {
        path: 'employee',
        component: EmployeeComponent,
        data: { animation: 'employee' }
      },
      {
        path: '',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full'
      }
    ]
  },

]

@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule,
    DataTablesModule
  ]
})
export class AdminModule { }
