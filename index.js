const banner = document.querySelector("#page-banner");

console.log("#page-banner node type is:", banner.nodeType);
console.log("#page-banner node name is:", banner.nodeName);
console.log("#page-banner has Child Nodes:", banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);
