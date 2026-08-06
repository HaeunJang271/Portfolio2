import productsJson from "@/data/products.json";
import { logger } from "@/lib/logger";
import type {
  MattressSizeName,
  Product,
  ProductPhoto,
  ProductRecord,
  ProductSize,
} from "@/types";

const SIZE_NAMES: MattressSizeName[] = [
  "Single",
  "Super Single",
  "Queen",
  "King",
];

/**
 * Type-guards a string as a known mattress size name.
 */
function isMattressSizeName(value: string): value is MattressSizeName {
  return SIZE_NAMES.includes(value as MattressSizeName);
}

/**
 * Builds gallery photos from image URLs for a product line.
 */
export function buildProductPhotos(
  product: Pick<ProductRecord, "name" | "line" | "images">,
): ProductPhoto[] {
  return product.images.map((src, index) => ({
    src,
    alt: `${product.name} ${product.line} 이미지 ${index + 1}`,
  }));
}

/**
 * Merges size definitions with the product price map for table rendering.
 */
export function buildProductSizeOptions(product: ProductRecord): ProductSize[] {
  return product.sizes.map((entry) => {
    const price = product.price[entry.name];

    if (typeof price !== "number") {
      logger.error("Missing price for product size", {
        productId: product.id,
        size: entry.name,
      });
      throw new Error(`Missing price for ${product.id} / ${entry.name}`);
    }

    if (!isMattressSizeName(entry.name)) {
      logger.error("Unknown mattress size name in products.json", {
        productId: product.id,
        size: entry.name,
      });
      throw new Error(`Unknown size name: ${entry.name}`);
    }

    return {
      size: entry.name,
      dimension: entry.dimension,
      price,
    };
  });
}

/**
 * Maps a JSON/CMS product record into the app product model.
 */
export function mapProductRecord(record: ProductRecord): Product {
  return {
    ...record,
    href: `/products/${record.id}`,
    features: record.features ?? [],
    photos: buildProductPhotos(record),
    sizeOptions: buildProductSizeOptions(record),
  };
}

/**
 * Validates and loads every product from products.json.
 */
export function loadProducts(
  records: ProductRecord[] = productsJson as ProductRecord[],
): Product[] {
  try {
    return records.map(mapProductRecord);
  } catch (error) {
    logger.error("Failed to load products.json", {
      error: error instanceof Error ? error.message : String(error),
    });
    throw error;
  }
}

export const products: Product[] = loadProducts();

/**
 * Finds a product line by id.
 */
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

/**
 * Returns all product ids for static route generation.
 */
export function getAllProductIds(): string[] {
  return products.map((product) => product.id);
}
