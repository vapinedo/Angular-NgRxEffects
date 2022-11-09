import { createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions';

export interface UsuariosState {
    users: Usuario[],
    error: any
    loaded: boolean,
    loading: boolean
}

export const usuariosInitialState: UsuariosState = {
   users: [],
   error: null,
   loaded: false,
   loading: false
}

const _usuariosReducer = createReducer(
    usuariosInitialState,
    on(cargarUsuarios, state => ({ ...state, loading: true })),
    on(cargarUsuariosSuccess, (state, { usuarios }) => ({ 
        ...state, 
        loaded: true, 
        loading: false,
        users: [...usuarios]
    })),
    on(cargarUsuariosError, (state, { payload }) => ({ 
        ...state, 
        loaded: false , 
        loading: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),
);

export function usuariosReducer(state: any, action: any) {
    return _usuariosReducer(state, action);
}