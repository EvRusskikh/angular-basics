import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  search = '';
  searchField = 'title';

  posts: Post[] = [
    {title: 'Корабль судьбы', text: 'Совместные чтения с ООК'},
    {title: 'Стоя под радугой', text: 'Соместные чтения с КК Переплет'},
    {title: 'Братья Карамазовы', text: 'Нужно бы продолжить'},
    {title: 'Жажда жизни', text: 'В планах на апрель'}
  ];
}
