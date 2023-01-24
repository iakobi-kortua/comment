import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-main-comments',
  templateUrl: './main-comments.component.html',
  styleUrls: ['./main-comments.component.scss'],
})
export class MainCommentsComponent implements OnInit {
  @Input() com: any;
  @Input() i: any;

  constructor(public commentsService: CommentsService) {}

  allowReply = false;
  allowReplayhandler(bol: any) {
    this.allowReply = bol;
  }

  plus() {
    this.com.score++;
    this.commentsService.comments.sort((a, b) => {
      return b.score - a.score;
    });
  }
  minus() {
    this.com.score--;
    this.commentsService.comments.sort((a, b) => {
      return b.score - a.score;
    });
  }

  ngOnInit(): void {}
}
