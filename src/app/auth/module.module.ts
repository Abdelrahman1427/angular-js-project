import { RegComponent } from './reg/reg.component';
import { LogInComponent } from './log-in/log-in.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleRoutingModule } from './module-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LogInComponent,RegComponent],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule, ]
})
export class ModuleModule { }
