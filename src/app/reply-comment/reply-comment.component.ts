import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-reply-comment',
  templateUrl: './reply-comment.component.html',
  styleUrls: ['./reply-comment.component.scss'],
})
export class ReplyCommentComponent implements OnInit {
  @Input() i: any;
  @Output() changedAllowReplay = new EventEmitter();

  constructor(public commentsService: CommentsService) {}

  addRepliedCom(i: number) {
    this.commentsService.comments[i].reply.push({
      content: this.commentsService.replaiedCom,
      createdAt: 'Now',
      score: 5,
      user: {
        image: {
          png: './images/avatars/image-juliusomo.png',
        },
        username: 'juliusomo',
      },
    });
    this.commentsService.replaiedCom = '';
    this.changedAllowReplay.emit(false);
  }

  ngOnInit(): void {}
}
// "id": 2,
// "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
// "createdAt": "2 weeks ago",
// "score": 5,
// "user": {
//   "image": {
//     "png": "./images/avatars/image-maxblagun.png",
//     "webp": "./images/avatars/image-maxblagun.webp"
//   },
//   "username": "maxblagun"
// },
