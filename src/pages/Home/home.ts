import {CardComponent} from "../../Components/cardComponent";
import { IProduct } from "../../models/card.model";
import products from "../../services/products";

const HomePage = async (): Promise<HTMLDivElement> => {
    const div = document.createElement("div");
    div.setAttribute('class',"grid grid-cols-4 gap-2 mt-10");
    try {
      const productList = await products(); // Espera a que se resuelva la promesa  
      // Muestra los productos en la página
      productList.forEach((product:IProduct) => {
        
        div.appendChild(CardComponent(product));
       
      });
      
    } catch (error) {
      console.error("Error fetching products:", error); // Maneja errores
      const p = document.createElement("p");
      p.textContent = "Error loading products.";
      div.appendChild(p);
    }
  
    return div; // Devuelve el div con el contenido
  };

  export default HomePage;