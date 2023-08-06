import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BLOGS_CONTENT } from 'src/assets/constant/blogs';

@Component({
  selector: 'app-readblog',
  templateUrl: './readblog.component.html',
  styleUrls: ['./readblog.component.scss'],
})
export class ReadblogComponent implements OnInit {
  content: any;
  allData = BLOGS_CONTENT;
  id: any;
  constructor(private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    let blog = this.allData.find((x) => x.id == this.id).data;
    if (blog) {
      this.content = blog;
    } else {
      this.route.navigate(['/blogs']);
    }
  }
}

// how to snapshot id from route in angular ?
