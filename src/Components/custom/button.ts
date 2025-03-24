export class ButtonWsp extends HTMLElement {
  
  constructor() {
    super(); // Llamar al constructor de HTMLElement
    this.setAttribute("class", "whatsapp");
    this.addEventListener("click", () => {
      alert("¡Botón clickeado!");
    });
  }
}


export default customElements.define("btn-wsp", ButtonWsp)