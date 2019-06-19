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
  MatRippleModule,
  MatStepperModule,
  MatFormFieldModule,
  MatRadioModule
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
    MatRippleModule,
    MatStepperModule,
    MatFormFieldModule,
    MatRadioModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatRippleModule,
    MatStepperModule,
    MatFormFieldModule,
    MatRadioModule
  ],
})
export class MaterialModule { }
