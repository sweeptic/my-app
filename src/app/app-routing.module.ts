import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerComponent } from './basic-components/server.component';
import { EventsComponentsComponent } from './events-components/events-components.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ObservablesComponentComponent } from './observables-component/observables-component.component';
import { SubjectComponent } from './subject/subject.component';

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
  //   { path: 'not-found', component: PageNotFoundComponent },
  //   {
  //     path: 'not-found',
  //     component: ErrorPageComponent,
  //     data: { message: 'Page not found!' },
  //   },
  //   { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  //   imports: [RouterModule.forRoot(appRoutes)],
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
