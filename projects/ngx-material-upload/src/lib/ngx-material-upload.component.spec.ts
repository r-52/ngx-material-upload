import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialUploadComponent } from './ngx-material-upload.component';
import { MaterialModule } from './material.module';

describe('NgxMaterialUploadComponent', () => {
  let component: NgxMaterialUploadComponent;
  let fixture: ComponentFixture<NgxMaterialUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxMaterialUploadComponent],
      imports: [MaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have any files selected', () => {
    component.fileInputSelectionChanged();
    expect(component.selectedFiles?.length).not.toBeDefined();
  });
});
