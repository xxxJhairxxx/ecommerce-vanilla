
export const Footer = (): HTMLElement => {
    const footer: HTMLElement = document.createElement("footer");
  
  
    footer.setAttribute("class", "w-full h-[4rem] bg-black");
    footer.innerHTML = `
      <div class=" text-white">
       
      </div>
    `;
    return footer;
  };
  