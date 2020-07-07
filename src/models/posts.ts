export default class Post {
  public id: string;

  public author: string;

  public content: string;

  constructor(id: string, author: string, content: string) {
    this.id = id;
    this.author = author;
    this.content = content;
  }
}

export const POSTS: Post[] = [];
