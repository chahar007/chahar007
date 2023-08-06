import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { ReadblogComponent } from './readblog/readblog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: 'read/:id',
    component: ReadblogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
