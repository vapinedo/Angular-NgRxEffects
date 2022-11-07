import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor(public usuarioSvc: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioSvc.getUsers()
      .subscribe(users => {
        console.log(users);
      });
  }

}
