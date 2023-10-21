import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './server/highlight.directive';
import { HighlightDirectiveHostBinding } from './server/highlightHostbinding.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HighlightDirective,
    HighlightDirectiveHostBinding,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
