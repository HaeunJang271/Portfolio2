import { describe, expect, it } from "vitest";

import { getAllProductIds, getProductById, products } from "@/data/products";
import { getNavItemByHref, navItems } from "@/data/site";

describe("site data helpers", () => {
  it("resolves navigation items by href", () => {
    expect(getNavItemByHref("/#products")?.label).toBe("PRODUCTS");
    expect(getNavItemByHref("/#consult")?.label).toBe("CONSULT");
    expect(navItems).toHaveLength(2);
  });

  it("exposes a detail page for every product line", () => {
    expect(products).toHaveLength(3);
    expect(getAllProductIds()).toEqual(["premium", "luxury", "signature"]);
    expect(getProductById("premium")?.href).toBe("/products/premium");
    expect(getProductById("luxury")?.href).toBe("/products/luxury");
    expect(getProductById("signature")?.href).toBe("/products/signature");
  });

  it("stores dimensions as width*depth*height", () => {
    const dimension = getProductById("premium")?.sizeOptions[0]?.dimension;
    expect(dimension).toMatch(/^\d+\*\d+\*\d+$/);
  });
});
