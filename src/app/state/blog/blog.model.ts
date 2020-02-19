import { Comment } from './../comment/comment.model';
import { User } from './../user/user.model';

export interface Blog {
  id: string;
  title: string;
  author: string;
  comments: [string];
}

export interface BlogsUsersComments {
  entities: {
    blogs: {

    },
    users: {

    },
    comments: {

    }
  }
}

export interface BlogFull {
  id: string;
  title: string;
  author: User;
  comments: [CommentFull]
}

export interface CommentFull {
  id: string;
  commentor: User
}
