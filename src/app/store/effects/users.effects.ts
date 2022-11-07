import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, tap } from "rxjs";
import { UsuarioService } from "src/app/services/usuario.service";
import { cargarUsuarios } from "../actions";

@Injectable()
export class UsuariosEffect {

    constructor(
        private actions$: Actions,
        private usuarioSvc: UsuarioService
    ) {}

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(cargarUsuarios),
            tap(data => console.log("effect tap", data)),
            mergeMap(
                () => this.usuarioSvc.getUsers()
                .pipe(
                    tap(data => console.log("getUser effect", data))
                )
            )
        )
    );

}