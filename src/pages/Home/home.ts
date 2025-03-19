import HomeProducts from "./homeProducts.ts";


const HomePage = async (): Promise<HTMLDivElement> => {
    
  const div = document.createElement("div");
    
    div.appendChild(await HomeProducts());
    return div; // Devuelve el div con el contenido
  };

  export default HomePage;