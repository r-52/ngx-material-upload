import { TestBed } from '@angular/core/testing';

import { NgxMaterialUploadService } from './ngx-material-upload.service';

describe('NgxMaterialUploadService', () => {
  let service: NgxMaterialUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMaterialUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
