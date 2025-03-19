import { Iroute } from './models/router.model';


export const routes: Iroute[] = [
  { path: "/", component: () =>  import('./pages/Home/home.ts') },
  { path: "/about", component:  () => import('./pages/About/about.ts') },
  { path: "/contact", component: () => import('./pages/Contact/contact.ts') },
];

 