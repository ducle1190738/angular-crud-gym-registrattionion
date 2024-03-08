import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { ListDangKyComponent } from './list-dang-ky/list-dang-ky.component';
import { ChitietNguoiDungComponent } from './chitiet-nguoi-dung/chitiet-nguoi-dung.component';
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkytaikhoanComponent } from './dangkytaikhoan/dangkytaikhoan.component';




@NgModule({
  declarations: [
    AppComponent,
    DangKyComponent,
    ListDangKyComponent,
    ChitietNguoiDungComponent,
    DangnhapComponent,
    DangkytaikhoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule, // đúng ngày địa phương, tự nhập
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,


    NgToastModule,
    NgConfirmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
