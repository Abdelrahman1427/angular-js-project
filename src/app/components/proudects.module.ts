import { ApisService } from './../shared/services/apis.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProudectsRoutingModule } from './proudects-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ProductCardComponent,ProductListComponent,],
  imports: [
    CommonModule,
    ProudectsRoutingModule,SharedModule, 
    HttpClientModule  
  ],
  providers:[ApisService]
})
export class ProudectsModule { }
