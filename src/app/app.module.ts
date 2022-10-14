import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomNamesComponent } from './random-names/random-names.component';
import { FormsModule } from '@angular/forms';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { GasVolumePipe } from './pipes-example/gasVolume.pipe';
import { StructuralComponent } from './structural/structural.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomNamesComponent,
    PipesExampleComponent,
    GasVolumePipe,
    StructuralComponent,
    CustomersListComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
