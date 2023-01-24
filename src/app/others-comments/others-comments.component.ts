import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-others-comments',
  templateUrl: './others-comments.component.html',
  styleUrls: ['./others-comments.component.scss'],
})
export class OthersCommentsComponent implements OnInit {
  get comments() {
    return this.commentsService.comments;
  }
  constructor(private commentsService: CommentsService) {}

  allowClick = false;

  check(index: number) {
    console.log(index);
  }

  ngOnInit(): void {}
}
