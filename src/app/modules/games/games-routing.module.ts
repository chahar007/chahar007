import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    children: [
      {
        path: 'flames',
        loadChildren: () =>
          import('./modules/flames/flames.module').then((f) => f.FlamesModule),
      },
      {
        path: 'tic-tac-toe',
        loadChildren: () =>
          import('./modules/tic-tac-toe/tic-tac-toe.module').then(
            (f) => f.TicTacToeModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
