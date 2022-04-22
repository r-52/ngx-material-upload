import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatIconModule, MatInputModule, MatSelectModule],
  exports: [MatButtonModule, MatIconModule, MatInputModule, MatSelectModule],
})
export class MaterialModule {}
