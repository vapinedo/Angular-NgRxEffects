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
  isLoading: boolean = false;
  error: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.users = this.usuarioSvc.getUsers();
    this.store.select("usuarios")
      .subscribe(state => {
        this.users = state.users;
        this.isLoading = state.loading;
        this.error = state.error;
      });

    this.store.dispatch(cargarUsuarios())
  }

}
