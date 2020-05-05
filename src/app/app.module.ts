import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListItemComponent } from './list-item/list-item.component';
import { CardComponent } from './card/card.component';
import { LoadingComponent } from './loading/loading.component';
import { AppRoutingModule } from './routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListItemComponent,
    CardComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
