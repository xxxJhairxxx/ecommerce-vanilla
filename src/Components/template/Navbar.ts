/** @format */
import logo from '../../assets/logo.png';

export const Navbar = (): HTMLElement => {
	const navbar: HTMLElement = document.createElement('nav');
	navbar.innerHTML = `<app-nav></app-nav>`;
	return navbar;
};
