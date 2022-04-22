import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxMaterialUploadModule } from '../../../ngx-material-upload/src/lib/ngx-material-upload.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [NgxMaterialUploadModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
