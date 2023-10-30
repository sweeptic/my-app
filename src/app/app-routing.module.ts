import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerComponent } from './basic-components/server.component';
import { EventsComponentsComponent } from './events-components/events-components.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ObservablesComponentComponent } from './observables-component/observables-component.component';
import { SubjectComponent } from './subject/subject.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ViewencapsulationComponent } from './viewencapsulation/viewencapsulation.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { ComponentstyleComponent } from './componentstyle/componentstyle.component';
import { SharingdataComponent } from './sharingdata/sharingdata.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponentComponent },
  {
    path: 'basics',
    component: ServerComponent,
  },
  {
    path: 'events',
    component: EventsComponentsComponent,
  },
  {
    path: 'observables',
    component: ObservablesComponentComponent,
  },
  {
    path: 'object',
    component: SubjectComponent,
  },
  {
    path: 'scheduler',
    component: SchedulerComponent,
  },
  {
    path: 'lifecyclehooks',
    component: LifecyclehooksComponent,
  },
  {
    path: 'viewencapsulation',
    component: ViewencapsulationComponent,
  },
  {
    path: 'componentcommunication',
    component: ComponentCommunicationComponent,
  },
  {
    path: 'componentstyle',
    component: ComponentstyleComponent,
  },
  {
    path: 'sharingdata',
    component: SharingdataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
