import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialUploadComponent } from './ngx-material-upload.component';

describe('NgxMaterialUploadComponent', () => {
  let component: NgxMaterialUploadComponent;
  let fixture: ComponentFixture<NgxMaterialUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMaterialUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
