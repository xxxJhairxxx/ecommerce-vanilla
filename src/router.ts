import { Iroute } from './models/router.model.ts';


export const routes: Iroute[] = [
  { path: "/", component: () =>  import('./pages/Home/home.ts') },
  { path: "/about", component: () => import('./pages/Contact/contact.ts') },
  { path: "/contact", component:  () => import('./pages/About/about.ts') },
];

 