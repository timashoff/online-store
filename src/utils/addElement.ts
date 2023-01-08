
export function addElement(parent: Element | null, element: DocumentFragment | null): void {
  if (parent === null) throw new Error(`${parent} does not exist`);
  if (element === null) throw new Error(`${element} does not exist`);
  parent.innerHTML = '';
  parent.appendChild(element);
}