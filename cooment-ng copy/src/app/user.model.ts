export class Comment {
    public userName: string;
    public userImg: string;
    public date: string;
    public content: string;
    public score: number;

    constructor(userName: string,userImg: string,date: string,content: string,score: number){
        this.userName = userName;
        this.userImg = userImg;
        this.date = date;
        this.content = content;
        this.score = score;
    }
}
