import { Action, createReducer, on } from '@ngrx/store';
import { FiltrosValidos, setFiltro } from './filtro.actions';

export const initialState: FiltrosValidos = 'todos';

export const filtroReducer = createReducer<FiltrosValidos, Action>(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro)
);
