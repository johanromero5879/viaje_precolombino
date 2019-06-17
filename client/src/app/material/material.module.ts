import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*Configure animations*/
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/*Components*/
import {
  MatButtonModule, 
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatCardModule,
  MatRippleModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatRippleModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatRippleModule
  ],
})
export class MaterialModule { }
