import { ProductListComponent } from './components/product-list/product-list.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegComponent } from './auth/reg/reg.component';

const routes: Routes = [
  {path : '',redirectTo:'list' , pathMatch : 'full'},
{path:'reg' ,component: RegComponent},
{path:'login' ,component: LogInComponent},
{path:'product' ,component: ProductListComponent},
{
  path: '**',
  component: ProductListComponent,
},



// {path : 'list/:id', component : ProductCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
