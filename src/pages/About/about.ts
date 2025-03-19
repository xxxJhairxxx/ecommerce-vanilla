const AboutPage = (): HTMLDivElement => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerHTML = "About Page";


    div.classList.add('Container');
    div.appendChild(h1);
  
    return div;
  };

  export default AboutPage;