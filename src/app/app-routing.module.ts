import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { ListDangKyComponent } from './list-dang-ky/list-dang-ky.component';
import { ChitietNguoiDungComponent } from './chitiet-nguoi-dung/chitiet-nguoi-dung.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkytaikhoanComponent } from './dangkytaikhoan/dangkytaikhoan.component';

const routes: Routes = [
  { path: '', redirectTo: 'dangnhap', pathMatch: 'full' },
  { path: 'dangnhap', component: DangnhapComponent },
  { path: 'dangkytaikhoan', component: DangkytaikhoanComponent },
  { path: 'dangky', component: DangKyComponent },
  { path: 'listdangky', component: ListDangKyComponent },
  { path: 'thongtin/:id', component: ChitietNguoiDungComponent },
  { path: 'capnhat/:id', component: DangKyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
