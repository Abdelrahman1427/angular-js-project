import { ProudectsModule } from './components/proudects.module';
import { ModuleModule } from './auth/module.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { RegComponent } from './auth/reg/reg.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/shared/navbar/navbar.component';

import { SharedModule } from './shared/shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ModuleModule,
    ProudectsModule

    // RouterModule.forRoot([
    //   // { path: '', component: ProductListComponent },
    //   // { path: 'products/:productId', component: ProductCardComponent },
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
