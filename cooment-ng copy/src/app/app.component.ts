import { Component } from '@angular/core';
import { Comment} from "./user.model"
import  data from "./data.json"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cooment-ng';
  editCom: boolean = false;
  comments: Comment [] = [
    new Comment(
    data.comments[0].user.username,
    "../assets/" + data.comments[0].user.image.png.split("/").slice(1).join("/"), 
    data.comments[0].createdAt, 
    data.comments[0].content,
    data.comments[0].score
    ),
    new Comment(
      data.comments[1].user.username,
      "../assets/" + data.comments[1].user.image.png.split("/").slice(1).join("/"), 
      data.comments[1].createdAt, 
      data.comments[1].content,
      data.comments[1].score
    )
  ];

  wrotedCom = '';
  userComments: string[] = [];
  addUserComment(){
    this.userComments.push(this.wrotedCom);
    console.log(this.userComments);
    this.wrotedCom = ""
  }

  deleteCom(i: number){
    this.userComments.splice(i,1);
  }

  editedComContent: string = "";

  allowEdit(index: number){
    this.editCom = true;
    this.editedComContent = this.userComments[index];
  }

  subEditedCom(index: number){
    this.userComments[index] = this.editedComContent;
    this.editCom = false;
  }
}
