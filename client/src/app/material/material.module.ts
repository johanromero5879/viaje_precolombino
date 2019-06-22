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
  MatRadioModule,
  MatIconModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  declarations: [],
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
    MatRadioModule,
    MatIconModule,
    MatDialogModule
  ],
})
export class MaterialModule { }
