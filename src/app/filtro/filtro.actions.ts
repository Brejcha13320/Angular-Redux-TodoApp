import { createAction, props } from '@ngrx/store';

export type FiltrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction(
  '[FILTRO] Set Filtro',
  props<{ filtro: FiltrosValidos }>()
);
