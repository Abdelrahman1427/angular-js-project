import { RegComponent } from './reg/reg.component';
import { LogInComponent } from './log-in/log-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
]

@NgModule({
  imports: [RouterModule.forChild(routes),  ReactiveFormsModule, FormsModule],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
