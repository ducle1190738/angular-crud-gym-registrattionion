import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LeHoangDuc_501220139_Angular';
  constructor(private location: Location) { }

  get daDangNhap(): boolean {
    const currentPath = this.location.path();
    return currentPath.startsWith('/dangnhap') || currentPath.startsWith('/dangkytaikhoan');
  }
}
