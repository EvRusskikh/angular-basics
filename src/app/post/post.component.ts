import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  title = 'Post Title';
  img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi5dnTYF_TDQRVmu6lurm9SGaTXUSiVB7f968ax22h2FyH-wvllw&s';
  status = 'loading';

  constructor() {
    const addPoint = setInterval(() => {
      this.status = this.status + '.';
    }, 500);
    setTimeout(() => {
      clearInterval(addPoint);
      console.log('Time is over');
      this.img = 'https://www.seekpng.com/png/full/215-2151945_open-cat-flat-icon-png.png';
      this.status = 'ready!';
    }, 3000);
  }
}
