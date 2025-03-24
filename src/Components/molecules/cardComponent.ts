import { IProduct } from "../../models/card.model.ts";
import cardHtml from "./cardComponent.html?raw";

export const CardComponent = ({
  title,
  description,
  image,
  price,
}: IProduct): HTMLDivElement => {
  const div = document.createElement("div");
  div.setAttribute(
    "class",
    " bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm dark:bg-gray-800 dark:border-gray-700"
  );

  div.innerHTML = cardHtml
    .replace(/\{{title}}/g, title)
    .replace(/\{{description}}/g, description)
    .replace(/\{{image}}/g, image)
    .replace(/\{{price}}/g, String(price));

  return div;
};
