import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'wishes',
    pathMatch: 'full',
  },
  {
    path: 'index.html',
    redirectTo: 'wishes',
    pathMatch: 'full',
  },
  {
    path: 'wishes',
    loadChildren: () =>
      import('./modules/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'create-wishes',
    loadChildren: () =>
      import('./modules/wish/wish.module').then((w) => w.WishModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
