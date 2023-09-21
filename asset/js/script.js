// Importe le CSS de la section 1
import section1css from "./section/section1.css";

// Ajoute le CSS de la section 1 au `head`
if (document.querySelector("#section1")) {
    document.head.appendChild(section1css);
}