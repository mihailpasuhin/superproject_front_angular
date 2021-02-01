import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { PapersComponent } from './papers/papers.component';
import { ForumComponent } from './forum/forum.component';
import { CoursesComponent } from './courses/courses.component';
import { ChatsComponent } from './chats/chats.component';
import { ForumMainPageComponent } from './forum/forum-main-page/forum-main-page.component';
import { PaperComponent } from './papers/paper/paper.component';
import { PapersListComponent } from './papers/papers-list/papers-list.component';
import { ThreadsPageComponent } from './forum/threads-page/threads-page.component';
import { PostsPageComponent } from './forum/posts-page/posts-page.component';
import { EditorComponent } from './papers/editor/editor.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileCommonInfoComponent } from './profile/profile-common-info/profile-common-info.component';
import { ProfileAdditionalInfoComponent } from './profile/profile-additional-info/profile-additional-info.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/' },
      { path: 'papers', component: PapersComponent, children: [
          { path: '', component: PapersListComponent },
          { path: 'paper', component: PaperComponent },
          { path: 'editor', component: EditorComponent },
      ]},
      { path: 'forum', component: ForumComponent, children: [
          { path: '', component: ForumMainPageComponent },
          { path: 'threads', component: ThreadsPageComponent },
          { path: 'thread', component: PostsPageComponent },
      ]},
      { path: 'courses', component: CoursesComponent },
      { path: 'chats', component: ChatsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent, children: [
          { path: '',  pathMatch: 'full', redirectTo: 'common' },
          { path: 'common', component: ProfileCommonInfoComponent },
          { path: 'additional', component: ProfileAdditionalInfoComponent },
      ]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
