import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';

import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { CourseService} from './courses.services';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component'
import {SignupFormComponent} from './signup-form/signup-form.component';
import { NewCourseForm2Component } from './new-course-form2/new-course-form2.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    NewCourseForm2Component,
    ChangePasswordComponent,
    PostsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CourseService,
    AuthorService,
    PostService, 
    // Telling wherever using ErrorHandler replace with AppErrorHandler
    {provide: ErrorHandler, useClass: AppErrorHandler} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
