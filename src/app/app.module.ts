import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserCommentComponent } from './user-comment/user-comment.component';
import { WriteCommentComponent } from './write-comment/write-comment.component';
import { OthersCommentsComponent } from './others-comments/others-comments.component';
import { OthersReplyComponent } from './others-reply/others-reply.component';
import { MainCommentsComponent } from './main-comments/main-comments.component';
import { ReplyCommentComponent } from './reply-comment/reply-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCommentComponent,
    WriteCommentComponent,
    OthersCommentsComponent,
    OthersReplyComponent,
    MainCommentsComponent,
    ReplyCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
