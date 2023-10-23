import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './basic-components/server.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './basic-components/highlight.directive';
import { HighlightDirectiveHostBinding } from './basic-components/highlightHostbinding.directive';
import { UnlessDirective } from './basic-components/unless.directive';
import { EventsComponentsComponent } from './events-components/events-components.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ObservablesComponentComponent } from './observables-component/observables-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HighlightDirective,
    HighlightDirectiveHostBinding,
    UnlessDirective,
    EventsComponentsComponent,
    HomeComponentComponent,
    ObservablesComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
