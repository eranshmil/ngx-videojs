import { TestBed } from '@angular/core/testing';

import { NgxVideojsService } from './ngx-videojs.service';

describe('NgxVideojsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxVideojsService = TestBed.get(NgxVideojsService);
    expect(service).toBeTruthy();
  });
});
