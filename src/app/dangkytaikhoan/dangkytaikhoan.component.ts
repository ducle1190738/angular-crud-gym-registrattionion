import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dangkytaikhoan',
  templateUrl: './dangkytaikhoan.component.html',
  styleUrls: ['./dangkytaikhoan.component.scss']
})
export class DangkytaikhoanComponent implements OnInit {
  public dangkyndForm !: FormGroup
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.dangkyndForm = this.fb.group({
      hoten: [''],
      email: [''],
      matkhau: [''],
      sdt: ['']
    })
  }
  dangKy() {
    this.http.post<any>("http://localhost:3000/nguoidung", this.dangkyndForm.value)
      .subscribe(res => {
        alert("Đăng ký thành công");
        this.dangkyndForm.reset();
        this.router.navigate(['dangnhap'])
      }, err => {
        alert("Đăng ký thất bại")
      })
  }
}
