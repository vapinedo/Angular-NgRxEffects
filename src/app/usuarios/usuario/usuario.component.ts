import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { cargarUsuario } from '../../store/actions/user.actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  user: any;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.store.select("usuario")
      .subscribe(state => {
        console.log({state});
        this.user = state.user;
      });

    this.activatedRoute.params.subscribe(({id}) => {
      this.store.dispatch(cargarUsuario({ id }));
    });
  }

}
