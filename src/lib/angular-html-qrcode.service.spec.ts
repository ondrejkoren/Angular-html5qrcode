import { TestBed } from '@angular/core/testing';

import { AngularHtmlQrcodeService } from './angular-html-qrcode.service';

describe('AngularHtmlQrcodeService', () => {
  let service: AngularHtmlQrcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularHtmlQrcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
