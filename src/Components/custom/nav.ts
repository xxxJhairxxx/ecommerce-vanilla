import logo from '../../assets/logo.png';
export class Nav extends HTMLElement {
    span = document.createElement("span");
    
    constructor() {
      super(); // Llamar al constructor de HTMLElement
      this.setAttribute(
		'class',
		'bg-black text-white h-[8rem] flex items-center top-0 left-0 sticky'
	);
	this.innerHTML = `
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
    }
  }

  export default customElements.define("app-nav", Nav);



  
  
  