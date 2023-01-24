export class Comment {
  public userName: string;
  public userImg: string;
  public date: string;
  public content: string;
  public score: number;
  public reply: any;

  constructor(
    userName: string,
    userImg: string,
    date: string,
    content: string,
    score: number,
    reply: any
  ) {
    this.userName = userName;
    this.userImg = userImg;
    this.date = date;
    this.content = content;
    this.score = score;
    this.reply = reply;
  }
}
