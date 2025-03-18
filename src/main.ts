import './style.css';
import {routes} from "./router";
import {Navbar} from "./Components/template/Navbar";

const render = async (path: string): Promise<void> => {
  const app = document.getElementById('app');
  if (!app) {return console.error('no existe la #app')};

  const route = routes.find((route) => route.path === path);

  if (route) {
    // Carga el componente dinámicamente
    const component = await route.component();
    app.replaceChildren(await component.default()); // Renderiza el componente

  } else {
    // Ruta no encontrada
    const component = document.createElement('div');
    component.innerHTML = `<h1>404 - Pagina no encontrada</h1>`;
    app.replaceChildren(component);
  }
};

const navigate = (path :string) => {
  window.history.pushState({}, path, window.location.origin + path);
  render(path);
};

window.onpopstate = () => {
  render(window.location.pathname);
};//guarda el historial de atras y adelante

document.addEventListener("DOMContentLoaded", () => {
  
  document.body.appendChild(Navbar());

  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e: Event) => {
      const enlace = e.target as HTMLAnchorElement;
      e.preventDefault();
      const path= new URL(enlace.href).pathname;
      navigate(path);
    });
  });
  

  render(window.location.pathname);
});
