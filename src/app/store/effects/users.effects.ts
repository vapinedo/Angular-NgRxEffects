import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map } from 'rxjs';
import { UsuarioService } from "src/app/services/usuario.service";
import { cargarUsuarios, cargarUsuariosSuccess } from "../actions";

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
                    map(usuarios => cargarUsuariosSuccess({ usuarios }))
                )
            )
        )
    );

}