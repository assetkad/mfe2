import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemoteMfeModule } from './remote-mfe/remote-mfe.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RemoteMfeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
