import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDangKyComponent } from './list-dang-ky.component';

describe('ListDangKyComponent', () => {
  let component: ListDangKyComponent;
  let fixture: ComponentFixture<ListDangKyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDangKyComponent]
    });
    fixture = TestBed.createComponent(ListDangKyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
