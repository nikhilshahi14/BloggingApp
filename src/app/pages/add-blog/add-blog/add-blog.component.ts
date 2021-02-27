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
  private blooggerList = [];
  blogtext : '';
  constructor(private router: Router,private blogService: BlogService) { }

  ngOnInit(): void {
  }
  add(): void {
    if(this.blogtext == '' || this.blogtext == null){
      window.alert("Please Write something in Blog......");
      return;
    }
    if(localStorage.getItem('blooggerList')){
      this.blooggerList= JSON.parse(localStorage.getItem('blooggerList'));
      var length = this.blooggerList[0].id;
      let obj = { id : length + 1, date : new Date() , blogtext : this.blogtext}
      this.blogs.push(obj);
    }
    else{
      let obj = { id : 1, date : new Date() , blogtext : this.blogtext}
      this.blogs.push(obj);
    }
    this.blogService.setBloggerList(this.blogs);
    this.router.navigate(['/blogs']);
   }
   logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  goBack(){
    this.router.navigate(['/blogs']);
  }
}
