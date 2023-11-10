import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filtro/filtro.actions';
import { limpiar } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent {
  filtroActual: actions.FiltrosValidos = 'todos';
  filtros: actions.FiltrosValidos[] = ['todos', 'completados', 'pendientes'];
  pendientes: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe(({ todos, filtro }) => {
      this.filtroActual = filtro;
      this.pendientes = todos.filter((todo) => !todo.completado).length;
    });
  }

  cambiarFiltro(filtro: actions.FiltrosValidos) {
    this.store.dispatch(actions.setFiltro({ filtro }));
  }

  limpiarCompletados() {
    this.store.dispatch(limpiar());
  }
}
