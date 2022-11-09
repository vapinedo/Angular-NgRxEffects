import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, of } from 'rxjs';
import { UsuarioService } from "src/app/services/usuario.service";
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess } from "../actions";

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        private usuarioSvc: UsuarioService
    ) {}

    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType(cargarUsuario),
            mergeMap(
                (action) => this.usuarioSvc.getUserById(action.id)
                .pipe(
                    map(user => cargarUsuarioSuccess({ usuario: user })),
                    catchError(error => of(cargarUsuarioError({ payload: error })))
                )
            )
        )
    );

}