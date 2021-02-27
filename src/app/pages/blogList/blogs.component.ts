import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Blog } from '../../model/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: any[] =[];
  blogText : '';

  constructor(private router: Router,private blogService: BlogService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
   this.blogs =   this.blogService.getBloggerList()
  }
  add(){
    this.router.navigate(['/add-blog']);
  }
  delete(blog: Blog): void {
     this.blogs = this.blogs.filter(h => h !== blog);
  }
  
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  edit(id):void{
    this.router.navigate(['/detail/'+id]);
  }
}
