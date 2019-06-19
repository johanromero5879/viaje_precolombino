import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Flex-layout*/
import { FlexLayoutModule } from '@angular/flex-layout';

/*Import modules*/
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/*Import components*/
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ContentsListComponent } from './contents-list/contents-list.component';
import { FormularioPreguntasComponent } from './formulario-preguntas/formulario-preguntas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHeaderComponent,
    ContentsListComponent,
    FormularioPreguntasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
