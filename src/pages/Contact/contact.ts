 const ContactPage = (): HTMLDivElement => {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.innerHTML = "Contact Page";
  div.appendChild(h1);

  return div;
};

export default ContactPage;