import { Comment } from './../comment/comment.model';
import { User } from './../user/user.model';

export interface Blog {
  id: string;
  title: string;
  author: string;
  comments: [string];
}

export interface BlogsUsersComments {
  blogs: Blog[],
  users: User[],
  comments: Comment[]
}

export interface BlogView {
  id: string;
  title: string;
  author: User;
  comments: CommentView[]
}

export interface CommentView {
  id: string;
  commenter: User
}
