import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = "https://reqres.in/api";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.url}/users`)
      .pipe(
        map((response: any) => response.data)
      )
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.url}/user/${id}`)
      .pipe(
        map((response: any) => response.data)
      );
  }
}
