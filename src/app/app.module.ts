import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import {AuthenticationService} from './services/authentication.service';
import { FormsModule } from '@angular/forms';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BlogsComponent } from './pages/blogList/blogs.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBlogComponent } from './pages/add-blog/add-blog/add-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogsComponent,
    BlogDetailComponent,
    AddBlogComponent,
  

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
  

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  entryComponents: [
    AuthenticationService
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
