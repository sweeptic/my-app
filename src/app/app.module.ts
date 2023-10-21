import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './server/highlight.directive';
import { HighlightDirectiveHostBinding } from './server/highlightHostbinding.directive';
import { UnlessDirective } from './server/unless.directive';
import { InnerComponent2Component } from './inner-component2/inner-component2.component';
import { InnerComponent1Component } from './inner-component1/inner-component1.component';
import { OuterComponent1Component } from './inner-component1/outer-component1/outer-component1.component';
import { OuterComponent2Component } from './inner-component2/outer-component2/outer-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HighlightDirective,
    HighlightDirectiveHostBinding,
    UnlessDirective,
    InnerComponent2Component,
    InnerComponent1Component,
    OuterComponent1Component,
    OuterComponent2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
