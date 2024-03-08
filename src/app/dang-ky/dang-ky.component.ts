import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { NgToastService } from 'ng-angular-popup';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangKyComponent {
  public goi = ["1 tháng", "3 tháng", "6 tháng", "1 năm"];
  public gioitinh = ["Nam", "Nữ"];
  public quantamList: String[] = [
    "Tăng cân",
    "Giảm mỡ",
    "Tự tin",
    "Sức bền",
    "Sức mạnh",
    "Kết nối cộng đồng",
    "Sức khỏe tinh thần",
    "Chống lão hóa"
  ];

  public dangkyForm!: FormGroup;
  public idDeCapNhat!: number;
  public trueCapNhat: boolean = false;
  constructor(private fb: FormBuilder, private activateRoute: ActivatedRoute, private api: ApiService, private toastService: NgToastService, private router: Router) {

  }
  ngOnInit(): void {
    this.dangkyForm = this.fb.group({
      ten: [''],
      ho: [''],
      email: [''],
      sdt: [''],
      cannang: [''],
      chieucao: [''],
      bmi: [''],
      ketquabmi: [''],
      gioitinh: ['', Validators.required],
      hlv: ['', Validators.required],
      goi: [''],
      quantam: [''],
      oldgym: ['', Validators.required],
      ngay: ['']
    });
    this.dangkyForm.controls['chieucao'].valueChanges.subscribe(res => {
      this.tinhBMI(res);
    });
    this.dangkyForm.controls['cannang'].valueChanges.subscribe(res => {
      this.tinhBMI1(res);
    });
    this.activateRoute.params.subscribe(val => {
      this.idDeCapNhat = val['id'];
      this.api.getDangkyId(this.idDeCapNhat)
        .subscribe(res => {
          this.trueCapNhat = true;
          this.dienFormDeChinhSua(res);
        })
    })
  }
  submit() {

    this.api.postDangky(this.dangkyForm.value)
      .subscribe(res => {
        this.toastService.success({ detail: "Thành công", summary: "Đăng ký hồ sơ thành công", duration: 3000 });
        this.dangkyForm.reset();
      })

  }

  capnhat() {
    this.api.updateDangky(this.dangkyForm.value, this.idDeCapNhat)
      .subscribe(res => {
        this.toastService.success({ detail: "Thành công", summary: "Cập nhật hồ sơ thành công", duration: 3000 });
        this.dangkyForm.reset();
        this.router.navigate(['listdangky'])
      })
  }

  tinhBMI(cc: number) {
    const cao = cc;
    const nang = this.dangkyForm.value.cannang;
    const bmi = nang / (cao * cao);
    this.dangkyForm.controls['bmi'].patchValue(bmi.toFixed(2));
    switch (true) {
      case (bmi < 18.5):
        this.dangkyForm.controls['ketquabmi'].patchValue("Thiếu cân");
        break;
      case (bmi >= 18.5 && bmi <= 24.9):
        this.dangkyForm.controls['ketquabmi'].patchValue("Bình thường");
        break;
      case (bmi >= 25 && bmi <= 29.9):
        this.dangkyForm.controls['ketquabmi'].patchValue("Thừa cân");
        break;
      case (bmi > 29.9 && bmi <= 34.9):
        this.dangkyForm.controls['ketquabmi'].patchValue("Béo phì");
        break;
      default:
        this.dangkyForm.controls['ketquabmi'].patchValue("Béo phì nguy hiểm");
        break;
    }
  }
  tinhBMI1(cn: number) {
    const cao = this.dangkyForm.value.chieucao;
    const nang = cn;
    const bmi = nang / (cao * cao);
    this.dangkyForm.controls['bmi'].patchValue(bmi.toFixed(2));
    switch (true) {
      case (bmi < 18.5):
        this.dangkyForm.controls['ketquabmi'].patchValue("Thiếu cân");
        break;
      case (bmi >= 18.5 && bmi <= 24.9):
        this.dangkyForm.controls['ketquabmi'].patchValue("Bình thường");
        break;
      case (bmi >= 25 && bmi <= 29.9):
        this.dangkyForm.controls['ketquabmi'].patchValue("Thừa cân");
        break;
      case (bmi > 29.9 && bmi <= 34.9):
        this.dangkyForm.controls['ketquabmi'].patchValue("Béo phì");
        break;
      default:
        this.dangkyForm.controls['ketquabmi'].patchValue("Béo phì nguy hiểm");
        break;
    }
  }

  dienFormDeChinhSua(user: User) {
    this.dangkyForm.setValue({
      ten: user.ten,
      ho: user.ho,
      email: user.email,
      sdt: user.sdt,
      cannang: user.cannang,
      chieucao: user.chieucao,
      bmi: user.bmi,
      ketquabmi: user.ketquabmi,
      gioitinh: user.gioitinh,
      hlv: user.hlv,
      goi: user.goi,
      quantam: user.quantam,
      oldgym: user.oldgym,
      ngay: user.ngay
    })
  }
}
