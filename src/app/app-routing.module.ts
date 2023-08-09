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
  {
    path: 'about-us',
    loadChildren: () =>
      import('./modules/about-us/about-us.module').then((w) => w.AboutUsModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./modules/contact-us/contact-us.module').then(
        (w) => w.ContactUsModule
      ),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./modules/privacy-policy/privacy-policy.module').then(
        (w) => w.PrivacyPolicyModule
      ),
  },
  {
    path: 'blogs',
    loadChildren: () =>
      import('./modules/blog/blog.module').then((w) => w.BlogModule),
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./modules/games/games.module').then((g) => g.GamesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
