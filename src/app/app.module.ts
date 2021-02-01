import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { PapersComponent } from './papers/papers.component';
import { ForumComponent } from './forum/forum.component';
import { CoursesComponent } from './courses/courses.component';
import { ChatsComponent } from './chats/chats.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PapersLeftColumnComponent } from './papers/papers-left-column/papers-left-column.component';
import { PapersRightColumnComponent } from './papers/papers-right-column/papers-right-column.component';
import { PaperCardComponent } from './papers/paper-card/paper-card.component';
import { SectionComponent } from './forum/forum-main-page/section/section.component';
import { SubsectionComponent } from './forum/forum-main-page/subsection/subsection.component';
import { SubsectionPageComponent } from './forum/subsection-page/subsection-page.component';
import { ForumMainPageComponent } from './forum/forum-main-page/forum-main-page.component';
import { QuillModule } from 'ngx-quill'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PaperComponent } from './papers/paper/paper.component';
import { PapersListComponent } from './papers/papers-list/papers-list.component';
import { LimitSymbolsPipe } from './shared/pipes/limit-symbols.pipe';
import { ThreadComponent } from './forum/threads-page/thread/thread.component';
import { ThreadsPageComponent } from './forum/threads-page/threads-page.component';
import { PostsPageComponent } from './forum/posts-page/posts-page.component';
import { PostComponent } from './forum/posts-page/post/post.component';
import { EditorComponent } from './papers/editor/editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { LocalStorageService } from './shared/services/local-storage.service';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { ProfileLeftColumnComponent } from './profile/profile-left-column/profile-left-column.component';
import { ProfileCommonInfoComponent } from './profile/profile-common-info/profile-common-info.component';
import { ProfileAdditionalInfoComponent } from './profile/profile-additional-info/profile-additional-info.component';
import { PapersMostPopularComponent } from './papers/papers-right-column/papers-most-popular/papers-most-popular.component';
import { PapersControlComponent } from './papers/papers-right-column/papers-control/papers-control.component';
import { PapersSearchComponent } from './papers/papers-right-column/papers-search/papers-search.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CourseCardComponent } from './courses/course-card/course-card.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor,
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainLayoutComponent,
    PapersComponent,
    ForumComponent,
    CoursesComponent,
    ChatsComponent,
    PapersLeftColumnComponent,
    PapersRightColumnComponent,
    PaperCardComponent,
    SectionComponent,
    SubsectionComponent,
    SubsectionPageComponent,
    ForumMainPageComponent,
    PaperComponent,
    PapersListComponent,
    LimitSymbolsPipe,
    ThreadComponent,
    ThreadsPageComponent,
    PostsPageComponent,
    PostComponent,
    EditorComponent,
    LoginComponent,
    ProfileComponent,
    ProfileLeftColumnComponent,
    ProfileCommonInfoComponent,
    ProfileAdditionalInfoComponent,
    PapersMostPopularComponent,
    PapersControlComponent,
    PapersSearchComponent,
    CourseCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [LocalStorageService, INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
