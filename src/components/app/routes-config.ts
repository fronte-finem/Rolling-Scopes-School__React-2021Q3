import { PageHome } from 'components/page-home/page-home';
import { Page404 } from 'components/page-404/page-404';
import { About } from 'components/page-about/page-about';
import { PageDetails } from 'components/page-details/page-details';
import { PageTest } from 'components/page-test/page-test';

export interface RouteConfig {
  path: string;
  nav: boolean;
  name: string;
  Component: () => JSX.Element;
}

export const routesConfig: RouteConfig[] = [
  { path: '/', nav: true, name: 'Home', Component: PageHome },
  { path: '/about', nav: true, name: 'About', Component: About },
  { path: '/test', nav: true, name: 'Test', Component: PageTest },
  { path: '/details/:id', nav: false, name: 'Details', Component: PageDetails },
  { path: '*', nav: false, name: '404', Component: Page404 },
];
