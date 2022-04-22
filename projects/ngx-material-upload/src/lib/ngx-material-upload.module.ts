import { NgModule } from '@angular/core';
import { NgxMaterialUploadComponent } from './ngx-material-upload.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxMaterialUploadComponent],
  imports: [MaterialModule, CommonModule],
  exports: [NgxMaterialUploadComponent],
})
export class NgxMaterialUploadModule {}
