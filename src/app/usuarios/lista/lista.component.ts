import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  users: any;

  constructor(public usuarioSvc: UsuarioService) { }

  ngOnInit(): void {
    this.users = this.usuarioSvc.getUsers();
  }

}
