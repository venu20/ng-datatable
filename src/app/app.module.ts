import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgDatatableComponentComponent } from './components/ng-datatable-component/ng-datatable-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NgDatatableComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
