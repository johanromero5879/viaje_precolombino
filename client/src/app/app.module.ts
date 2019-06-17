import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Import modules*/
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';

/*Import components*/
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ContentsListComponent } from './contents-list/contents-list.component';

/*Flex-layout*/
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHeaderComponent,
    ContentsListComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
