import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardRoutingModule } from 'app/dashboard/dashboard-routing.module';
import { DashboardComponent } from 'app/dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    DashboardRoutingModule
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
