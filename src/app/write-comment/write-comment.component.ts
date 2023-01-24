import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-write-comment',
  templateUrl: './write-comment.component.html',
  styleUrls: ['./write-comment.component.scss'],
})
export class WriteCommentComponent implements OnInit {
  @Output() wrotedComment = new EventEmitter<string>();

  wrotedCom = '';
  addUserComment() {
    console.log(this.wrotedCom);
    this.wrotedComment.emit(this.wrotedCom);
    this.wrotedCom = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
