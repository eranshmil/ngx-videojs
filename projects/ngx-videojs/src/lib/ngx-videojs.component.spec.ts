import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxVideojsComponent } from './ngx-videojs.component';

describe('NgxVideojsComponent', () => {
  let component: NgxVideojsComponent;
  let fixture: ComponentFixture<NgxVideojsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxVideojsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxVideojsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
