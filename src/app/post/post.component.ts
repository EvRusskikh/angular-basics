import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  title = 'Post Title';
  img1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi5dnTYF_TDQRVmu6lurm9SGaTXUSiVB7f968ax22h2FyH-wvllw&s';
  img2 = 'https://www.seekpng.com/png/full/215-2151945_open-cat-flat-icon-png.png';
  img = this.img1;
  firstImg = true;
  status = '';
  statusStyle = {};
  imgActive = false;

  updateImg() {
    const time = 400;
    this.status = 'loading';
    const addPoint = setInterval(() => {
      this.status = this.status + '.';
    }, time);
    setTimeout(() => {
      clearInterval(addPoint);
      if (this.firstImg) {
        this.img = this.img2;
      } else {
        this.img = this.img1;
      }
      this.firstImg = !this.firstImg;
      this.imgActive = !this.imgActive;
      this.status = 'ready!';
      this.statusStyle = {color: 'green'};
      setTimeout(() => {
        this.status = '';
        this.statusStyle = {};
      }, time * 2);
    }, time * 6);
  }
}
