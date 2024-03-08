import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = "http://localhost:3000/dangky"
  constructor(private http: HttpClient) { }

  postDangky(khachhang: User) {
    return this.http.post<User>(`${this.baseUrl}`, khachhang)
  }

  getDangky() {
    return this.http.get<User[]>(`${this.baseUrl}`)
  }

  updateDangky(khachhang: User, id: number) {
    return this.http.put<User>(`${this.baseUrl}/${id}`, khachhang)
  }

  deleteDangky(id: number) {
    return this.http.delete<User>(`${this.baseUrl}/${id}`)
  }

  getDangkyId(id: number) {
    return this.http.get<User>(`${this.baseUrl}/${id}`)
  }

}
