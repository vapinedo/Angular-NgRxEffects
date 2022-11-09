import { createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from '../actions';

export interface UsuarioState {
    id: string | null,
    user: Usuario | null,
    error: any
    loaded: boolean,
    loading: boolean
}

export const usuarioInitialState: UsuarioState = {
    id: null,
    user: null,
    error: null,
    loaded: false,
    loading: false
}

const _usuarioReducer = createReducer(
    usuarioInitialState,
    on(cargarUsuario, (state, {id}) => ({ 
        ...state, 
        loading: true,
        id: id
    })),
    on(cargarUsuarioSuccess, (state, { usuario }) => ({ 
        ...state, 
        loaded: true, 
        loading: false,
        user: {...usuario}
    })),
    on(cargarUsuarioError, (state, { payload }) => ({ 
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

export function usuarioReducer(state: any, action: any) {
    return _usuarioReducer(state, action);
}