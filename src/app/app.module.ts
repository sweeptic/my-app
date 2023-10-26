import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './basic-components/server.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './basic-components/highlight.directive';
import { HighlightDirectiveHostBinding } from './basic-components/highlightHostbinding.directive';
import { HttpClientModule } from '@angular/common/http';
import { UnlessDirective } from './basic-components/unless.directive';
import { EventsComponentsComponent } from './events-components/events-components.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ObservablesComponentComponent } from './observables-component/observables-component.component';
import { Inner1Component } from './inner1/inner1.component';
import { Inner2Component } from './inner2/inner2.component';
import { Outer1Component } from './outer1/outer1.component';
import { Outer2Component } from './outer2/outer2.component';
import { CounterService } from './services/counter.service';
import { SubjectComponent } from './subject/subject.component';
import { SubInner1Component } from './sub-inner1/sub-inner1.component';
import { SubInner2Component } from './sub-inner2/sub-inner2.component';
import { SubOuter2Component } from './subInner2/sub-outer2/sub-outer2.component';
import { SubOuter1Component } from './subInner1/sub-outer1/sub-outer1.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

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
    Inner1Component,
    Inner2Component,
    Outer1Component,
    Outer2Component,
    SubjectComponent,
    SubInner1Component,
    SubInner2Component,
    SubOuter2Component,
    SubOuter1Component,
    SchedulerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
