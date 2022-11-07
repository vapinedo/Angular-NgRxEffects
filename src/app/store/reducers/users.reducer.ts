import { createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions';

export interface UsuariosState {
    users: [],
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

const _counterReducer = createReducer(
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
        error: payload
    })),
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}