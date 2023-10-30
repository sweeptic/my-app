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
import { Inner1Component } from './events-components/inner1/inner1.component';

import { CounterService } from './services/counter.service';
import { SubjectComponent } from './subject/subject.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { PeekABooComponent } from './hooks/peek-a-boo/peek-a-boo/peek-a-boo.component';
import { PeekABooParentComponent } from './hooks/peek-a-boo/peek-a-boo-parent/peek-a-boo-parent.component';
import { PeekABooDirective } from './peek-aboo-directive';
import { OnChangesComponent } from './hooks/onchanges/on-changes/on-changes.component';
import { OnChangesParentComponent } from './hooks/onchanges/on-changes-parent/on-changes-parent.component';
import { DoCheckComponent } from './hooks/do-check/do-check/do-check.component';
import { DoCheckParentComponent } from './hooks/do-check/do-check-parent/do-check-parent.component';
import { Inner2Component } from './events-components/inner2/inner2.component';
import { Outer1Component } from './events-components/outer1/outer1.component';
import { Outer2Component } from './events-components/outer2/outer2.component';
import { SubInner1Component } from './events-components/sub-inner1/sub-inner1.component';
import { SubInner2Component } from './events-components/sub-inner2/sub-inner2.component';
import { SubOuter1Component } from './events-components/subInner1/sub-outer1/sub-outer1.component';
import { SubOuter2Component } from './events-components/subInner2/sub-outer2/sub-outer2.component';
import { AfterViewComponent } from './hooks/afterView/after-view/after-view.component';
import { AfterViewParentComponent } from './hooks/afterView/after-view-parent/after-view-parent.component';
import { ChildViewComponent } from './hooks/child-view/child-view.component';
import { AfterContentComponent } from './hooks/after-content/after-content.component';
import { AfterContentParentComponent } from './hooks/after-content-parent/after-content-parent.component';
import { ChildComponent } from './hooks/child/child.component';
import { CounterParentComponent } from './hooks/counter-parent/counter-parent.component';
import { CounterComponent } from './hooks/counter/counter.component';
import { ViewencapsulationComponent } from './viewencapsulation/viewencapsulation.component';
import { EmulatedEncapsulationComponent } from './viewencapsulation/emulated-encapsulation/emulated-encapsulation.component';
import { NoEncapsulationComponent } from './viewencapsulation/no-encapsulation/no-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './viewencapsulation/shadow-dom-encapsulation/shadow-dom-encapsulation.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { AstronautComponent } from './component-communication/astronaut/astronaut.component';
import {
  CountdownParentComponent,
  CountdownViewChildParentComponent,
} from './component-communication/countdown-parent/countdown-parent.component';
import { CountdownTimerComponent } from './component-communication/countdown-timer/countdown-timer.component';
import { HeroChildComponent } from './component-communication/hero-child/hero-child.component';
import { HeroParentComponent } from './component-communication/hero-parent/hero-parent.component';
import { MissioncontrolComponent } from './component-communication/missioncontrol/missioncontrol.component';
import { NameChildComponent } from './component-communication/name-child/name-child.component';
import { NameParentComponent } from './component-communication/name-parent/name-parent.component';
import { VersionChildComponent } from './component-communication/version-child/version-child.component';
import { VersionParentComponent } from './component-communication/version-parent/version-parent.component';
import { VoterComponent } from './component-communication/voter/voter.component';
import { VotetakerComponent } from './component-communication/votetaker/votetaker.component';
import { ComponentstyleComponent } from './componentstyle/componentstyle.component';

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
    LifecyclehooksComponent,
    PeekABooComponent,
    PeekABooParentComponent,
    PeekABooDirective,
    OnChangesComponent,
    OnChangesParentComponent,
    DoCheckParentComponent,
    DoCheckComponent,
    AfterViewComponent,
    AfterViewParentComponent,
    ChildViewComponent,
    AfterContentComponent,
    AfterContentParentComponent,
    ChildComponent,
    CounterParentComponent,
    CounterComponent,
    ViewencapsulationComponent,
    EmulatedEncapsulationComponent,
    NoEncapsulationComponent,
    ShadowDomEncapsulationComponent,
    ComponentCommunicationComponent,
    AstronautComponent,
    CountdownParentComponent,
    CountdownViewChildParentComponent,
    CountdownTimerComponent,
    HeroChildComponent,
    HeroParentComponent,
    MissioncontrolComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VotetakerComponent,
    ComponentstyleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
