import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ComhandSharedModule } from 'app/shared/shared.module';
import { ComhandCoreModule } from 'app/core/core.module';
import { ComhandAppRoutingModule } from './app-routing.module';
import { ComhandHomeModule } from './home/home.module';
import { ComhandEntityModule } from './entities/entity.module';
import { ComhandAppJeSuisModule } from './je-suis/je-suis.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ComhandSharedModule,
    ComhandCoreModule,
    ComhandHomeModule,
    ComhandAppJeSuisModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ComhandEntityModule,
    ComhandAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class ComhandAppModule {}
