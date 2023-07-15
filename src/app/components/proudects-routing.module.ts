import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
{path : '',redirectTo:'list' , pathMatch : 'full'},
{path : 'list', component : ProductListComponent},
{path : 'card', component : ProductCardComponent},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProudectsRoutingModule { }
