import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, of } from 'rxjs';
import { UsuarioService } from "src/app/services/usuario.service";
import { cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess } from "../actions";

@Injectable()
export class UsuariosEffect {

    constructor(
        private actions$: Actions,
        private usuarioSvc: UsuarioService
    ) {}

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(cargarUsuarios),
            mergeMap(
                () => this.usuarioSvc.getUsers()
                .pipe(
                    map(usuarios => cargarUsuariosSuccess({ usuarios })),
                    catchError(error => of(cargarUsuariosError({ payload: error })))
                )
            )
        )
    );

}