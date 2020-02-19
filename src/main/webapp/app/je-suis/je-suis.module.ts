import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComhandSharedModule } from '../shared/shared.module';

import { JE_SUIS_ROUTE, JeSuisComponent } from './';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

@NgModule({
  imports: [ComhandSharedModule, RouterModule.forRoot([JE_SUIS_ROUTE], { useHash: true })],
  declarations: [JeSuisComponent, PageOneComponent, PageTwoComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComhandAppJeSuisModule {}
