import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Blog } from '../../model/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: [ './blog-detail.component.css' ]
})
export class BlogDetailComponent implements OnInit {
  blogs: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    const id = +this.route.snapshot.params.id;
    let bloggerList = this.blogService.getBloggerList();
    this.blogs = bloggerList.filter(e=> e.id ==id)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    debugger;
    this.blogService.updateBlog(this.blogs[0]);
    this.router.navigate(['/blogs']);
  }
}