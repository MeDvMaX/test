import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TreeComponent } from './common/tree/tree.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './common/tree/search/search.component';

import { TreeService } from './services/tree/tree.service';
import { ItemsComponent } from './common/tree/items/items.component';
import { ItemComponent } from './common/tree/items/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    DashboardComponent,
    SearchComponent,
    ItemsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
