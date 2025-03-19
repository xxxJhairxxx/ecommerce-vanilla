import { IProduct } from './../../models/card.model';
import { CardComponent } from "../../components/molecules/cardComponent";
import products from "../../services/products";

const HomeProducts = async(): Promise<HTMLElement> =>{
    const section = document.createElement("section");
    section.setAttribute('class',"Container w-full grid grid-cols-4 gap-10 mt-10");
    try {
      const productList = await products(); // Espera a que se resuelva la promesa  
      // Muestra los productos en la página
      productList.forEach((product:IProduct) => {
        
        section.appendChild(CardComponent(product));
       
      });
      
    } catch (error) {
      console.error("Error fetching products:", error); // Maneja errores
      const p = document.createElement("p");
      p.textContent = "Error loading products.";
      section.appendChild(p);
    }

    return section;
    
}

export default HomeProducts