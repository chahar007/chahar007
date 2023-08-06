import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BLOGS } from 'src/assets/constant/app-constant';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogList = BLOGS;
  constructor(private router: Router) {}

  navigate(id) {
    this.router.navigate(['/blogs/read/' + id]);
  }
}
