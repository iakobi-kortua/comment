import { Injectable } from '@angular/core';
import { Comment } from './user.model';
import data from './data.json';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  allComs = data.comments;
  comments: Comment[] = [];

  constructor() {
    this.allComs.forEach((comment) => {
      this.comments.push(
        new Comment(
          comment.user.username,
          '../assets/' + comment.user.image.png.split('/').slice(1).join('/'),
          comment.createdAt,
          comment.content,
          comment.score,
          comment.replies
        )
      );
    });
  }

  replaiedCom: any;
}
