import { PageHome } from './page-home';
import { Page404 } from './page-404';
import { About } from './page-about';
import { PageDetails } from './page-details';
import { PageTest } from './page-test';

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
