import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { JeSuisComponent } from './je-suis.component';
import { PAGE_ONE_ROUTE } from './page-one/page-one.route';
import { PAGE_TWO_ROUTE } from './page-two/page-two.route';

export const JE_SUIS_ROUTE: Route = {
  path: 'je-suis',
  component: JeSuisComponent,
  data: {
    authorities: [],
    pageTitle: 'je-suis.title'
  },
  canActivate: [UserRouteAccessService],
  children: [PAGE_ONE_ROUTE, PAGE_TWO_ROUTE]
};
