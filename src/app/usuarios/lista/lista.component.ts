import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  users: any;

  constructor() { }

  ngOnInit(): void {
    // this.users = this.usuarioSvc.getUsers();
  }

}
