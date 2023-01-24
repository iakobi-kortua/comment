import { Component } from '@angular/core';
import { Comment } from './user.model';
import data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cooment-ng';
  userComments: string[] = [];

  deleteHandler(index: number) {
    this.userComments.splice(index, 1);
  }

  wrotedComHandler(comment: string) {
    this.userComments.push(comment);
  }
}
