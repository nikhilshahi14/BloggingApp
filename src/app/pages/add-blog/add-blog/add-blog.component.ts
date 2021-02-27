import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  blogs: any[] =[];
  blogText : '';
  constructor(private router: Router,private blogService: BlogService) { }

  ngOnInit(): void {
  }
  add(): void {
    let obj = { id : 2, date : new Date() , blogtext : this.blogText}
    this.blogs.push(obj);
    this.blogService.setBloggerList(this.blogs);
    this.router.navigate(['/blogs']);
   }
}
