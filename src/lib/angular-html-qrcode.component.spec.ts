import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHtmlQrcodeComponent } from './angular-html-qrcode.component';

describe('AngularHtmlQrcodeComponent', () => {
  let component: AngularHtmlQrcodeComponent;
  let fixture: ComponentFixture<AngularHtmlQrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularHtmlQrcodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularHtmlQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
