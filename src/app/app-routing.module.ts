import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerComponent } from './basic-components/server.component';
import { EventsComponentsComponent } from './events-components/events-components.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ObservablesComponentComponent } from './observables-component/observables-component.component';
import { SubjectComponent } from './subject/subject.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { LifecyclehooksComponent } from './lifecycle-hooks/lifecyclehooks.component';
import { ViewencapsulationComponent } from './view-encapsulation/viewencapsulation.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';

import { SharingdataComponent } from './sharing-data/sharingdata.component';
import { HeroAppComponent } from './component-style/hero-app.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { AngularelementsComponent } from './angular-elements/angularelements/angularelements.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';

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
        component: HeroAppComponent,
    },
    {
        path: 'sharingdata',
        component: SharingdataComponent,
    },
    {
        path: 'contentprojection',
        component: ContentProjectionComponent,
    },
    {
        path: 'dynamiccomponent',
        component: DynamicComponentComponent,
    },
    {
        path: 'angularelements',
        component: AngularelementsComponent,
    },
    {
        path: 'templatesyntax',
        component: TemplateSyntaxComponent,
    },
    {
        path: 'propertybinding',
        component: PropertyBindingComponent,
    },
    {
        path: 'attributebinding',
        component: AttributeBindingComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
