import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { User } from '../models/user.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-list-dang-ky',
  templateUrl: './list-dang-ky.component.html',
  styleUrls: ['./list-dang-ky.component.scss']
})
export class ListDangKyComponent implements OnInit {
  public users!: User[];  //Lưu trữ dữ liệu người dùng được lấy từ API
  public dataSource!: MatTableDataSource<User>; //lưu trữ dữ liệu người dùng và là nguồn dữ liệu cho mat-table

  displayedColumns: string[] = ['id', 'ho', 'ten', 'email', 'sdt', 'ketquabmi', 'gioitinh', 'goi', 'ngay', 'action'] //Mảng các cột được hiển thị trên bảng. Các cột này tương ứng với các thuộc tính của đối tượng người dùng
  @ViewChild(MatPaginator) paginator!: MatPaginator; //Phân trang
  @ViewChild(MatSort) sort!: MatSort; // sắp xếp trang


  constructor(private api: ApiService, private router: Router, private confirm: NgConfirmService, private toast: NgToastService) { }
  ngOnInit(): void {
    this.getUser();
  }

  //Lấy dữ liệu người dùng từ service API, sau đó gắn vào dataSource của MatTableDataSource
  getUser() {
    this.api.getDangky()
      .subscribe(res => {
        this.users = res;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }
  //Phương thức applyFilter(event: Event) được gọi khi người dùng sử dụng tìm kiếm
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; //Lấy thông tin khi nhập vào từ khóa
    this.dataSource.filter = filterValue.trim().toLowerCase(); // Gán từ khóa ấy cho filter của dataSource, lúc này dữ liệu sẽ được lọc theo từ khóa đ

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  chinhsua(id: number) {
    this.router.navigate(['capnhat', id])
  }

  xoa(id: number) {
    this.confirm.showConfirm("Bạn có chắc chắn muốn xóa hồ sơ người dùng này?",
      () => {
        this.api.deleteDangky(id)
          .subscribe(res => {
            this.toast.success({ detail: "Thành công", summary: "Xóa hồ sơ thành công", duration: 3000 })
            this.getUser();
          })
      },
      () => { })

  }
}
