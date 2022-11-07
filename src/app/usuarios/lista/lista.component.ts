import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  users: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.users = this.usuarioSvc.getUsers();
    this.store.dispatch(cargarUsuarios())
  }

}
