
  export const Container = (children?: HTMLElement): HTMLElement  => {
    const section = document.createElement("section");
    if (children) {
      section.appendChild(children);
    }
    section.setAttribute("class", "max-w-[800px]");
    return section;
  }