
export function getProductId(): number | undefined {
  const path = window.location.pathname;
  console.log(Number(path.split('/').at(-1)));
  if (path.includes('products')) return Number(path.split('/').at(-1));
}