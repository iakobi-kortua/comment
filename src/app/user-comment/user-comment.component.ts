import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.scss'],
})
export class UserCommentComponent implements OnInit {
  @Input() userComment: string = '';
  @Input() index = 0;
  @Output() indexForDelete = new EventEmitter<number>();

  score = 0;
  editCom: boolean = false;

  deleteCom() {
    this.indexForDelete.emit(this.index);
  }

  editedComContent: string = '';

  allowEdit() {
    this.editCom = true;
    this.editedComContent = this.userComment;
  }

  subEditedCom() {
    this.userComment = this.editedComContent;
    this.editCom = false;
  }

  plus() {
    this.score++;
    this.commentsService.comments.sort((a, b) => {
      return b.score - a.score;
    });
  }

  minus() {
    this.score--;
    this.commentsService.comments.sort((a, b) => {
      return b.score - a.score;
    });
  }
  constructor(public commentsService: CommentsService) {}

  ngOnInit(): void {}
}
