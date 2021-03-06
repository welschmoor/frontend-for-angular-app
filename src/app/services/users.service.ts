import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseURL = "http://localhost:3000/api/"
  constructor(private http: HttpClient) {

  }

  getAll(): Observable<any> {
    return this.http.get(this.baseURL + "getAll")
      .pipe(delay(5100))  // example of how to delay getting data
  }

  postData(data: any): Observable<any> {
    return this.http.post(this.baseURL + "post", data)
  }

  updateData(data: any, id: string): Observable<any> {
    return this.http.patch(this.baseURL + "update" + `/${id}`, data)
  }

}
