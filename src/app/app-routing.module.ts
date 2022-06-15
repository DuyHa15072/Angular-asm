import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddUserComponent } from './components/auth/add-user/add-user.component';
import { EditUserComponent } from './components/auth/edit-user/edit-user.component';
import { ListUserComponent } from './components/auth/list-user/list-user.component';
import { AddBlogComponent } from './components/blog/add-blog/add-blog.component';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { ListBlogComponent } from './components/blog/list-blog/list-blog.component';
import { AddWorkComponent } from './components/work/add-work/add-work.component';
import { EditWorkComponent } from './components/work/edit-work/edit-work.component';
import { ListWorkComponent } from './components/work/list-work/list-work.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DetailWorkComponent } from './pages/detail-work/detail-work.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
   { path:"", component: HomeComponent, pathMatch: "full"},
   { path:"blog", component: BlogComponent},
   { path:"work", component: WorkComponent},
   { path:"work/:id", component: DetailWorkComponent},
   { path:"signup", component: SignupComponent, },
   { path:"signin", component: SigninComponent},
   { path:"admin/blog", component: ListBlogComponent},
   { path:"admin/blog/add", component: AddBlogComponent},
   { path:"admin/blog/:id/edit", component: EditBlogComponent},
   { path:"admin/work", component: ListWorkComponent},
   { path:"admin/work/add", component: AddWorkComponent},
   { path:"admin/work/:id/edit", component: EditWorkComponent},
   { path:"admin/user", component: ListUserComponent},
   { path:"admin/user/add", component: AddUserComponent},
   { path:"admin/user/:id/edit", component: EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
