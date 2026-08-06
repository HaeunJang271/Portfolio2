import { describe, expect, it } from "vitest";

import {
  buildProductPhotos,
  buildProductSizeOptions,
  getProductById,
  loadProducts,
  mapProductRecord,
  products,
} from "@/data/products";
import type { ProductRecord } from "@/types";

const sample: ProductRecord = {
  id: "sample",
  name: "Sample Line",
  line: "Sample",
  description: "테스트 제품",
  images: ["https://example.com/a.jpg", "https://example.com/b.jpg"],
  sizes: [
    { name: "Single", dimension: "1000*2000*250" },
    { name: "Queen", dimension: "1500*2000*280" },
  ],
  price: {
    Single: 100000,
    Queen: 200000,
  },
  features: ["feature-a"],
};

describe("products.json loader", () => {
  it("maps JSON records into app products", () => {
    const product = mapProductRecord(sample);

    expect(product.href).toBe("/products/sample");
    expect(product.photos).toHaveLength(2);
    expect(product.sizeOptions[0]).toEqual({
      size: "Single",
      dimension: "1000*2000*250",
      price: 100000,
    });
  });

  it("builds photos and size options from JSON fields", () => {
    expect(buildProductPhotos(sample)[0]?.src).toContain("example.com");
    expect(buildProductSizeOptions(sample)).toHaveLength(2);
  });

  it("throws when a size is missing its price", () => {
    expect(() =>
      loadProducts([
        {
          ...sample,
          price: { Single: 100000 },
        },
      ]),
    ).toThrow(/Missing price/);
  });

  it("loads catalog products from products.json", () => {
    expect(products).toHaveLength(3);
    expect(getProductById("premium")?.line).toBe("Premium");
    expect(getProductById("luxury")?.images).toHaveLength(4);
    expect(getProductById("signature")?.price.King).toBe(3190000);
  });
});
