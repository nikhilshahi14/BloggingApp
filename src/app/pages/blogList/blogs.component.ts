import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Blog } from '../../model/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'blog',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: any[] =[];
  blogText : '';

  constructor(private router: Router,private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs(): void {
   this.blogs =   this.blogService.getBloggerList()
  }
  add(){
    this.router.navigate(['/add-blog']);
  }
  delete(i): void {
     this.blogService.deleteBlog(i);
     window.location.reload();
  }
  
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  edit(id):void{
    this.router.navigate(['/detail/'+id]);
  }
  sortingSOW(){
    this.blogs.sort((a, b) => {
      if (new Date(a.date) < new Date(b.date)) return -1;
      else if (new Date(a.date) > new Date(b.date)) return 1;
      else return 0;
    });
  }
}
