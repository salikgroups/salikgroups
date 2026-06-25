export function getProductAnchor(category: string): string {
  return `product-${category.toLowerCase().replace(/\s+/g, "-")}`;
}

export function getProductHref(category: string): string {
  return `/#${getProductAnchor(category)}`;
}
