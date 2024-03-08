import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangkytaikhoanComponent } from './dangkytaikhoan.component';

describe('DangkytaikhoanComponent', () => {
  let component: DangkytaikhoanComponent;
  let fixture: ComponentFixture<DangkytaikhoanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DangkytaikhoanComponent]
    });
    fixture = TestBed.createComponent(DangkytaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
