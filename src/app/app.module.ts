import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { LifecyclehooksComponent } from './lifecycle-hooks/lifecyclehooks.component';
import { PeekABooComponent } from './lifecycle-hooks/hooks/peek-a-boo/peek-a-boo/peek-a-boo.component';
import { PeekABooParentComponent } from './lifecycle-hooks/hooks/peek-a-boo/peek-a-boo-parent/peek-a-boo-parent.component';
import { PeekABooDirective } from './lifecycle-hooks/peek-aboo-directive';
import { OnChangesComponent } from './lifecycle-hooks/hooks/onchanges/on-changes/on-changes.component';
import { OnChangesParentComponent } from './lifecycle-hooks/hooks/onchanges/on-changes-parent/on-changes-parent.component';
import { DoCheckComponent } from './lifecycle-hooks/hooks/do-check/do-check/do-check.component';
import { DoCheckParentComponent } from './lifecycle-hooks/hooks/do-check/do-check-parent/do-check-parent.component';
import { Inner2Component } from './events-components/inner2/inner2.component';
import { Outer1Component } from './events-components/outer1/outer1.component';
import { Outer2Component } from './events-components/outer2/outer2.component';
import { SubInner1Component } from './events-components/sub-inner1/sub-inner1.component';
import { SubInner2Component } from './events-components/sub-inner2/sub-inner2.component';
import { SubOuter1Component } from './events-components/subInner1/sub-outer1/sub-outer1.component';
import { SubOuter2Component } from './events-components/subInner2/sub-outer2/sub-outer2.component';
import { AfterViewComponent } from './lifecycle-hooks/hooks/afterView/after-view/after-view.component';
import { AfterViewParentComponent } from './lifecycle-hooks/hooks/afterView/after-view-parent/after-view-parent.component';
import { ChildViewComponent } from './lifecycle-hooks/hooks/child-view/child-view.component';
import { AfterContentComponent } from './lifecycle-hooks/hooks/after-content/after-content.component';
import { AfterContentParentComponent } from './lifecycle-hooks/hooks/after-content-parent/after-content-parent.component';
import { ChildComponent } from './lifecycle-hooks/hooks/child/child.component';
import { CounterParentComponent } from './lifecycle-hooks/hooks/counter-parent/counter-parent.component';
import { CounterComponent } from './lifecycle-hooks/hooks/counter/counter.component';
import { ViewencapsulationComponent } from './view-encapsulation/viewencapsulation.component';
import { EmulatedEncapsulationComponent } from './view-encapsulation/emulated-encapsulation/emulated-encapsulation.component';
import { NoEncapsulationComponent } from './view-encapsulation/no-encapsulation/no-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './view-encapsulation/shadow-dom-encapsulation/shadow-dom-encapsulation.component';
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

import { SharingdataComponent } from './sharing-data/sharingdata.component';
import { AliasingComponent } from './sharing-data/aliasing/aliasing.component';
import { InTheMetadataComponent } from './sharing-data/in-the-metadata/in-the-metadata.component';
import { InputOutputComponent } from './sharing-data/input-output/input-output.component';
import { ItemDetailComponent } from './sharing-data/item-detail/item-detail.component';
import { ItemDetailMetadataComponent } from './sharing-data/item-detail-metadata/item-detail-metadata.component';
import { ItemOutputComponent } from './sharing-data/item-output/item-output.component';
import { HeroAppComponent } from './component-style/hero-app.component';
import { HeroAppMainComponent } from './component-style/hero-app-main/hero-app-main.component';
import { QuestSummaryComponent } from './component-style/quest-summary/quest-summary.component';
import { HeroDetailsComponent } from './component-style/hero-details/hero-details.component';
import { HeroTeamComponent } from './component-style/hero-team/hero-team.component';
import { HeroControlsComponent } from './component-style/hero-controls/hero-controls.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ZippyBasicComponent } from './content-projection/zippy-basic/zippy-basic.component';
import { ZippyMultislotComponent } from './content-projection/zippy-multislot/zippy-multislot.component';
import { ZippyNgprojectasComponent } from './content-projection/zippy-ngprojectas/zippy-ngprojectas.component';
import {
    ExampleZippy,
    ZippyContentDirective,
    ZippyToggleDirective,
} from './content-projection/example-zippy.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { HeroProfileComponent } from './dynamic-component/ad-items/hero-profile/hero-profile.component';
import { HeroJobAdComponent } from './dynamic-component/ad-items/hero-job-ad/hero-job-ad.component';
import { AdBannerComponent } from './dynamic-component/ad-banner/ad-banner.component';
import { AdDirective } from './dynamic-component/ad.directive';
import { AngularelementsComponent } from './angular-elements/angularelements/angularelements.component';
import { PopupComponent } from './angular-elements/popup/popup.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import {
    BigHeroDetailComponent,
    HeroDetailComponent,
} from './template-syntax/hero-detail.component';
import { ClickDirective } from './template-syntax/click.directive';
import { SizerComponent } from './template-syntax/sizer.component';
import { HappyHeroComponent } from './template-syntax/happy-hero/happy-hero.component';
import { SadHeroComponent } from './template-syntax/sad-hero/sad-hero.component';
import { ConfusedHeroComponent } from './template-syntax/confused-hero/confused-hero.component';
import { UnknownHeroComponent } from './template-syntax/unknown-hero/unknown-hero.component';
import { HeroFormComponent } from './template-syntax/hero-form/hero-form.component';
import { SvgComponent } from './template-syntax/svg/svg.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { PropItemListComponent } from './property-binding/prop-item-list/prop-item-list.component';
import { PropItemDetailComponent } from './property-binding/prop-item-detail/prop-item-detail.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { CompWithHostBindingComponent } from './attribute-binding/comp-with-host-binding/comp-with-host-binding.component';
import { MyInputWithAttributeDecoratorComponent } from './attribute-binding/my-input-with-attribute-decorator/my-input-with-attribute-decorator.component';
import { SingleAndMultipleStyleBindingComponent } from './attribute-binding/single-and-multiple-style-binding/single-and-multiple-style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventItemDetailComponent } from './event-binding/event-item-detail/event-item-detail.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { FlyingHeroesComponent } from './pipes/flying-heroes/flying-heroes.component';
import { HeroAsyncMessageComponent } from './pipes/hero-async-message/hero-async-message.component';
import { Herobirthday1Component } from './pipes/herobirthday1/herobirthday1.component';
import { Herobirthday2Component } from './pipes/herobirthday2/herobirthday2.component';
import { HeroListComponent } from './pipes/hero-list/hero-list.component';
import { PowerBoostCalculatorComponent } from './pipes/power-boost-calculator/power-boost-calculator.component';
import { PowerBoosterComponent } from './pipes/power-booster/power-booster.component';
import { PrecedenceComponent } from './pipes/precedence/precedence.component';
import { FlyingHeroesPipe } from './pipes/flying-heroes.pipe';
import { FlyingHeroesImpurePipe } from './pipes/flying-heroes-impure.pipe';
import { FlyingHeroesImpureComponent } from './pipes/flying-heroes-impure/flying-heroes-impure.component';
import { FetchJsonPipe } from './pipes/fetch-json.pipe';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component';
import { ItemDetailDirectivesComponent } from './built-in-directives/item-detail-directives/item-detail-directives.component';
import { ItemSwitchComponents } from './built-in-directives/item-switch/item-switch.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { AvoidComponent } from './attribute-directives/avoid/avoid.component';
import { Highlight0Directive } from './attribute-directives/highlight0.directive';
import { HighlightDirectiveAttr } from './attribute-directives/highlight.directive';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { HeroCompStrdirComponent } from './structural-directives/hero-comp-strdir/hero-comp-strdir.component';
import { IfLoadedDirective } from './structural-directives/if-loaded.directive';
import { LoadingStateDirective } from './structural-directives/loading-state.directive';
import { TrigonometryDirective } from './structural-directives/trigonometry.directive';
import { heroSwitchComponentsStructural } from './structural-directives/hero-switch-strdir/hero-switch-strdir.component';
import { DepedencyInjectionComponent } from './depedency-injection/depedency-injection.component';
import { APP_CONFIG, HERO_DI_CONFIG } from './depedency-injection/app.config';
import { CarComponent } from './depedency-injection/car/car.component';
import { InjectorComponent } from './depedency-injection/injector.component';
import { TestComponentDep } from './depedency-injection/test.component';
import { HeroListDepComponent } from './depedency-injection/heroes/hero-list-dep.component';
import { HeroesComponentDep } from './depedency-injection/heroes/heroes.component';
import { HeroesTspComponent } from './depedency-injection/heroes-tsp';
import { ProvidersModule } from './depedency-injection/providers.module';



@NgModule({
    declarations: [
        HeroDetailComponent,
        BigHeroDetailComponent,
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
        HeroAppComponent,
        SharingdataComponent,
        AliasingComponent,
        InTheMetadataComponent,
        InputOutputComponent,
        ItemDetailComponent,
        ItemDetailMetadataComponent,
        ItemOutputComponent,
        HeroAppMainComponent,
        QuestSummaryComponent,
        HeroDetailsComponent,
        HeroTeamComponent,
        HeroControlsComponent,
        ContentProjectionComponent,
        ZippyBasicComponent,
        ZippyMultislotComponent,
        ZippyNgprojectasComponent,
        ExampleZippy,
        ZippyToggleDirective,
        ZippyContentDirective,
        AdDirective,
        DynamicComponentComponent,
        HeroProfileComponent,
        HeroJobAdComponent,
        AdBannerComponent,
        AngularelementsComponent,
        PopupComponent,
        TemplateSyntaxComponent,
        HeroDetailsComponent,
        ClickDirective,
        SizerComponent,
        HappyHeroComponent,
        SadHeroComponent,
        ConfusedHeroComponent,
        UnknownHeroComponent,
        HeroFormComponent,
        SvgComponent,
        PropertyBindingComponent,
        PropItemListComponent,
        PropItemDetailComponent,
        AttributeBindingComponent,
        CompWithHostBindingComponent,
        MyInputWithAttributeDecoratorComponent,
        SingleAndMultipleStyleBindingComponent,
        EventBindingComponent,
        EventItemDetailComponent,
        TwowayBindingComponent,
        PipesComponent,
        ExponentialStrengthPipe,
        FlyingHeroesComponent,
        HeroAsyncMessageComponent,
        Herobirthday1Component,
        Herobirthday2Component,
        HeroListComponent,
        PowerBoostCalculatorComponent,
        PowerBoosterComponent,
        PrecedenceComponent,
        FlyingHeroesPipe,
        FlyingHeroesImpurePipe,
        FlyingHeroesImpureComponent,
        FetchJsonPipe,
        TemplateVariablesComponent,
        BuiltInDirectivesComponent,
        ItemDetailDirectivesComponent,
        ItemSwitchComponents,
        AttributeDirectivesComponent,
        AvoidComponent,
        Highlight0Directive,
        HighlightDirectiveAttr,
        StructuralDirectivesComponent,
        HeroCompStrdirComponent,
        IfLoadedDirective,
        LoadingStateDirective,
        TrigonometryDirective,
        heroSwitchComponentsStructural,
        DepedencyInjectionComponent,
        CarComponent,
        InjectorComponent,
        TestComponentDep,
        HeroListDepComponent,
        HeroesComponentDep,
        HeroesTspComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ProvidersModule
    ],
    providers: [CounterService, { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }],
    bootstrap: [AppComponent],
})
export class AppModule { }
