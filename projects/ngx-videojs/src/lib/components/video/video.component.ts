import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  NgZone,
  ViewEncapsulation,
  EventEmitter,
  Output,
  Input,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';

import videojs from 'video.js';

import { EventType } from '../../models/event-type';

@Component({
  selector: 'vjs-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VjsVideoComponent implements AfterViewInit, OnDestroy {
  readonly defaultOptions: videojs.PlayerOptions = {
    controls: true
  };

  @Input() options: videojs.PlayerOptions;
  @Input() sources: string[];

  @Output() canPlay = new EventEmitter<any>();
  @Output() canPlayThrough = new EventEmitter<any>();
  @Output() ended = new EventEmitter<any>();
  @Output() enterFullWindow = new EventEmitter<any>();
  @Output() error = new EventEmitter<any>();
  @Output() exitFullWindow = new EventEmitter<any>();
  @Output() fullScreenChange = new EventEmitter<any>();
  @Output() loadStart = new EventEmitter<any>();
  @Output() pause = new EventEmitter<any>();
  @Output() play = new EventEmitter<any>();
  @Output() playerResize = new EventEmitter<any>();
  @Output() playing = new EventEmitter<any>();
  @Output() ready = new EventEmitter<any>();
  @Output() resize = new EventEmitter<any>();
  @Output() seeked = new EventEmitter<any>();
  @Output() seeking = new EventEmitter<any>();
  @Output() timeUpdate = new EventEmitter<any>();

  @ViewChild('player') _playerElement: ElementRef;

  private _videoInstance: videojs.Player;

  constructor(private _zone: NgZone) {}

  ngAfterViewInit() {
    this._zone.runOutsideAngular(() => this._init());
  }

  ngOnDestroy() {
    if (this._videoInstance) {
      this._videoInstance.dispose();
      this._videoInstance = null;
    }
  }

  private _init() {
    this._videoInstance = videojs(
      this._playerElement.nativeElement,
      videojs.mergeOptions(this.defaultOptions, this.options)
    );

    this._registerEvents();
  }

  private _registerEvents() {
    if (!this._videoInstance) {
      return;
    }

    for (const eventType of Object.keys(EventType)) {
      this._videoInstance.on(this._playerElement.nativeElement, eventType, event =>
        this._zone.run(() => this[eventType].emit(event))
      );
    }
  }
}
