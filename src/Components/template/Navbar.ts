import { Container } from "./container";

export const Navbar = (): HTMLElement => {
  const navbar: HTMLElement = document.createElement("nav");

  Container(navbar);
  navbar.setAttribute("class", "w-full mx-auto h-[10rem]");
  navbar.innerHTML = `
      <a href="/" data-link>Home</a>
      <a href="/about" data-link>About</a>
      <a href="/contact" data-link>Contact</a>
  `;
  return navbar;
};
