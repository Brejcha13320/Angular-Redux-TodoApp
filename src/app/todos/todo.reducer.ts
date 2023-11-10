import { createReducer, on } from '@ngrx/store';
import {
  borrar,
  crear,
  editar,
  limpiar,
  toggle,
  toggleAll,
} from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Salvar el Mundo'),
  new Todo('Aprender Redux'),
  new Todo('Aprender Angular'),
];

export const todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),

  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),

  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  }),

  on(borrar, (state, { id }) => {
    return state.filter((todo) => todo.id !== id);
  }),

  on(toggleAll, (state, { completado }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completado: completado,
      };
    });
  }),

  on(limpiar, (state) => {
    return state.filter((todo) => !todo.completado);
  })
);
