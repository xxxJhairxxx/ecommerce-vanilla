/** @format */
import logo from '../../assets/logo.png';

export const Navbar = (): HTMLElement => {
	const navbar: HTMLElement = document.createElement('nav');

	navbar.setAttribute(
		'class',
		'bg-black text-white h-[8rem] flex items-center top-0 left-0 sticky'
	);
	navbar.innerHTML = `
                      <div class="Container flex justify-between items-center">
                         <a href="/" title="logo" class="block w-[16rem] h-full enlace" data-link>
                            <img src='${logo}' class="w-full block pointer-events-none " />
                         </a>
                          <ul class="flex items-center gap-5 text-[1.6rem]">
                            <li><a href="/" data-link>Home</a></li>
                            <li><a href="/about" data-link>About</a></li>
                            <li><a href="/contact" data-link>Contact</a></li>
                          </ul>
                      </div>  
                      `;
	return navbar;
};
