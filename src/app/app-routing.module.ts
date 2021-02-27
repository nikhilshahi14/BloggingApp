import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AddBlogComponent } from './pages/add-blog/add-blog/add-blog.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BlogsComponent } from './pages/blogList/blogs.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail/:id', component: BlogDetailComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'add-blog', component: AddBlogComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
