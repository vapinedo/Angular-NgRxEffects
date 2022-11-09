import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = "https://reqres.in/apix";

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.url}/users`)
      .pipe(
        map((response: any) => response.data)
      )
  }
}
