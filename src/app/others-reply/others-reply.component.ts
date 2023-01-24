import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-others-reply',
  templateUrl: './others-reply.component.html',
  styleUrls: ['./others-reply.component.scss'],
})
export class OthersReplyComponent implements OnInit {
  @Input() reply: any;
  @Input() i: any;

  myName = 'juliusomo';

  deleteReply(i: any) {
    this.commentsService.comments[i].reply.content = '';
  }

  constructor(public commentsService: CommentsService) {}

  ngOnInit(): void {}
}
