import { IProduct } from "../../models/card.model";

export const CardComponent = ({
  title,
  description,
  image,
  price,
}: IProduct): HTMLDivElement => {
  const div = document.createElement("div");
  div.setAttribute('class',
    " bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm dark:bg-gray-800 dark:border-gray-700"
  );

  div.innerHTML = `
          
    <a href="#" class="h-[35rem] block bg-white">
        <img class="rounded-t-lg h-full w-full object-contain" src="${image}" alt="${title}" />
    </a>
    <div class="p-10">
        <a href="#">
            <h5 class="max-h-[6rem] h-[6rem] text-[2rem] overflow-hidden font-primary font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
        </a>
        <p class="my-5 font-normal text-[1.5rem] max-h-[7rem] overflow-hidden text-gray-700 dark:text-gray-400">${description}</p>
        <div class="flex justify-between items-center text-white">
       
         <p class="text-[1.8rem]">$ ${price}</p>
        <a href="#" class="inline-flex items-center px-8 py-2 text-[1.5rem] font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
         add to card  
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
       
        </div>
        
    </div>
    `;


  return div;
};
