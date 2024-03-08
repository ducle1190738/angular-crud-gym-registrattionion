import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietNguoiDungComponent } from './chitiet-nguoi-dung.component';

describe('ChitietNguoiDungComponent', () => {
  let component: ChitietNguoiDungComponent;
  let fixture: ComponentFixture<ChitietNguoiDungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChitietNguoiDungComponent]
    });
    fixture = TestBed.createComponent(ChitietNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
