import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sources = ['//vjs.zencdn.net/v/oceans.mp4', '//vjs.zencdn.net/v/oceans.webm'];
}
