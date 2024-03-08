import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.scss']
})
export class DangnhapComponent implements OnInit {

  public dangnhapForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.dangnhapForm = this.formBuilder.group({
      email: [''],
      matkhau: ['']
    })
  }
  dangnhap() {
    const { email, matkhau } = this.dangnhapForm.value;
    this.http.get<any[]>(`http://localhost:3000/nguoidung?email=${email}&matkhau=${matkhau}`)
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === email && a.matkhau === matkhau;
        });
        if (user) {
          alert("Đăng nhập thành công");
          this.dangnhapForm.reset();
          this.router.navigate(['dangky'])
        } else {
          alert("Không tìm thấy người dùng")
        }
      })
  }
}
