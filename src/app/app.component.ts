import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Пост номер один',
      text: 'Большой и страшный текст',
      id: 1
    },
    {
      title: 'Пост под номером два',
      text: 'Очень важная информация',
      id: 2
    },
    {
      title: 'Пост нумбер три',
      text: 'Текст для Алешки'
    }
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
