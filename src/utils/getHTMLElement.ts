
export function getHTMLElement(parentNode: ParentNode, selector: string): HTMLElement {
  const element = parentNode.querySelector(selector)
  if (!element) throw new Error(`element with selector: ${selector} not found in the ${parentNode}`)
  if (!(element instanceof HTMLElement)) throw new Error(`element is not an HTMLElement`)
  return element
}