import {Render,Navigate} from '../vanilla'
import Template from './Components/template/Template.ts';
import './styles/style.css'


document.addEventListener("DOMContentLoaded", () => {

  const app = document.getElementById('app');
  if (!app) {return console.error('no existe la #app')};

 //Cargar Template
  app.replaceWith(Template())

  document.querySelectorAll("nav a").forEach((a) => {

    a.addEventListener("click", (e: Event) => {
      e.preventDefault();
      Navigate(e.target as HTMLAnchorElement);
    });
  });
  

  Render(window.location.pathname);
});
