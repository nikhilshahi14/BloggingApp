import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Blog } from '../model/blog';


@Injectable({ providedIn: 'root' })
export class BlogService {

  private blooggerList = [];
  blog: any =[];
  constructor(
    private http: HttpClient) { } 

  getBloggerList() {
    if(localStorage.getItem('blooggerList')) {
      this.blooggerList= JSON.parse(localStorage.getItem('blooggerList'));
    }
    return this.blooggerList
  }

  public setBloggerList(blooggerList) {
    if(localStorage.getItem('blooggerList')) {
      this.blooggerList= JSON.parse(localStorage.getItem('blooggerList'));
      this.blooggerList.push(blooggerList[0]);
      localStorage.setItem('blooggerList' ,JSON.stringify(this.blooggerList))
    }
    else{
      localStorage.setItem('blooggerList' ,JSON.stringify(blooggerList));
    }
  }
  public updateBlog(editBlog){
    this.blooggerList = JSON.parse(localStorage.getItem('blooggerList'))
    this.blooggerList.filter(e=> e.id ==editBlog.id)[0].blogtext = editBlog.blogtext;
    localStorage.setItem('blooggerList' ,JSON.stringify(this.blooggerList))
  }
  public deleteBlog(index){
    this.blooggerList = JSON.parse(localStorage.getItem('blooggerList'))
    if(this.blooggerList.length > 0){
      this.blooggerList.splice(index,1);
      localStorage.removeItem('blooggerList');
      if(this.blooggerList.length > 0){
        localStorage.setItem('blooggerList' ,JSON.stringify(this.blooggerList));
      }
    }
  }
}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/