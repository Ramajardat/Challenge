// Function To Create Elements
const create = (el) => document.createElement(`${el}`);
// create Elements
let header = create("header");
let logo = create("span");
let ul = create("ul");
let content = create("content");
let footer = create("footer");

// Give Classes to the elements
header.classList.add("website-header");
logo.classList.add("logo");
ul.classList.add("menu");
content.classList.add("content");
footer.classList.add("footer");
for (let i = 0; i < 16; i++) {
  if (i < 4) {
    let menuLi = create("li");
    menuLi.className = `menu-List-${i + 1}`;
    menuLi.style.cssText =
      "margin: 0 10px; cursor: pointer; font-size: 17px; color: #777;";
    ul.appendChild(menuLi);
  }
  let productBox = create("div");
  let productNum = create("span");
  productBox.style.cssText =
    "padding: 25px; display: flex; align-items: center; flex-direction: column-reverse; background-color: #fff;";
  productBox.textContent = "product";
  productNum.style.cssText = "font-size:30px ; color:#777;";
  productNum.textContent = `${i + 1}`;
  content.appendChild(productBox);
  productBox.appendChild(productNum);
}

//Append Elements
document.body.appendChild(header);
header.appendChild(logo);
header.appendChild(ul);
document.body.appendChild(content);
document.body.appendChild(footer);

// textContent
logo.textContent = "RA MA";
document.getElementsByTagName("li")[0].textContent = "Home";
document.getElementsByTagName("li")[1].textContent = "About";
document.getElementsByTagName("li")[2].textContent = "Services";
document.getElementsByTagName("li")[3].textContent = "Content";
footer.textContent = "RJ © 2022";
// style elements
document.body.style.cssText =
  "margin:0; font-family: 'Caveat', cursive;text-transform:capitalize;";
header.style.cssText =
  "display: flex; justify-content: space-between; align-items: center; background-color: #fff; padding: 20px;";
logo.style.cssText =
  "cursor: pointer; font-size: 30px; font-weight: bold; color: green;";
ul.style.cssText = "margin:0; padding:0; list-style:none;display:flex;";
content.style.cssText =
  "display: grid; grid-template-columns: repeat(auto-fill , minmax(350px , 1fr)); gap: 10px; background-color: rgb(185 183 183); padding: 15px;";
footer.style.cssText =
  "text-align:center; padding:20px; font-weight:bold;background-color:green;color:white;font-size:25px;";
