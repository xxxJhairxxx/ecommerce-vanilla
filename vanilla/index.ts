import {routes} from "../src/router.ts"

export const Render = async (path: string): Promise<void> => {
 
    const children = document.querySelector('.children');
    if (!children) {return console.error('no existe la #app')};
    const route = routes.find((route) => route.path === path);
  
    if (route) {
      // Carga el componente dinámicamente
      const component = await route.component();
      
      children.replaceChildren(await component.default())
  
    } else {
      // Ruta no encontrada
      const component = document.createElement('div');
      component.innerHTML = `<h1>404 - Pagina no encontrada</h1>`;
      children.replaceChildren(component);
    }
  };
  
export const Navigate = (a :HTMLAnchorElement) => {
  console.log(a)
    const path= new URL(a.href).pathname;
    window.history.pushState({}, path, window.location.origin + path);
    Render(path);
  };
  
 window.onpopstate = () => {
  Render(window.location.pathname);
  };//guarda el historial de atras y adelante
  