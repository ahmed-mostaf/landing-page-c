/*The following function is to link all sections with
Navbar and scroll to them when you click on them
A section is highlighted in the viewport when scrolling */
function Nav_Bar_buttons() {
/*The following methods are used to get elements from an html
document and create elements, text, and links for the navbar*/
let side = document.createDocumentFragment();
let all_part = document.getElementsByTagName("section");
let ul_nav = document.getElementById("navbar__list");
