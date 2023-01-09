
//function getHTMLElementsAll(parentNode: ParentNode, selector: string): NodeListOf<Element> {
//   const elements = parentNode.querySelectorAll(selector);
//   if (!elements) throw new Error(`${parentNode} is empty`);
//   elements.forEach(element => {
//     if (!(element instanceof HTMLElement)) 
//throw new Error(`element with selector: ${selector} not found in the ${parentNode}`);
//   });
//   return elements;
// }