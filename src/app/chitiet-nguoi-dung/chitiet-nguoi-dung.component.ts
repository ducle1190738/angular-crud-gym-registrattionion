import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-chitiet-nguoi-dung',
  templateUrl: './chitiet-nguoi-dung.component.html',
  styleUrls: ['./chitiet-nguoi-dung.component.scss']
})
export class ChitietNguoiDungComponent implements OnInit {
  public idNguoiDung!: number
  public thongTinNguoiDung!: User
  constructor(private activateRoute: ActivatedRoute, private api: ApiService) {

  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(val => {
      this.idNguoiDung = val['id'];
      this.fetchThongTin(this.idNguoiDung)
    })
  }

  fetchThongTin(idNguoiDung: number) {
    this.api.getDangkyId(idNguoiDung)
      .subscribe(res => {
        this.thongTinNguoiDung = res;
      })
  }
}
