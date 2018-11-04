import { Component } from '@angular/core';

import videojs from 'video.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public options: videojs.PlayerOptions = {
    controls: true
  };
  public sources = ['//vjs.zencdn.net/v/oceans.mp4', '//vjs.zencdn.net/v/oceans.webm'];
}
