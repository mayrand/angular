import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FormSkuComponentComponent } from './form-sku-component/form-sku-component.component';
import { FormSkuWithBuilderComponent } from './form-sku-with-builder/form-sku-with-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSkuComponentComponent,
    FormSkuWithBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
