import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*Configure animations*/
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/*Components*/
import {
  MatButtonModule, 
  MatCheckboxModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule
  ],
})
export class MaterialModule { }
