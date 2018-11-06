import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { VjsModule } from 'ngx-videojs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, VjsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
