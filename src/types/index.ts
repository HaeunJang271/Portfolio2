/** Single top-level navigation destination. */
export type NavItem = {
  href: string;
  label: string;
};

/** Size label used across catalog and detail pricing. */
export type MattressSizeName =
  | "Single"
  | "Super Single"
  | "Queen"
  | "King";

/** Size entry stored in products.json without price. */
export type ProductSizeDefinition = {
  name: MattressSizeName;
  dimension: string;
};

/** Size row resolved for UI tables (size + dimension + price). */
export type ProductSize = {
  size: MattressSizeName;
  dimension: string;
  price: number;
};

/** Gallery image resolved from products.json URL strings. */
export type ProductPhoto = {
  src: string;
  alt: string;
};

/**
 * Raw product document shape stored in JSON / future CMS payloads.
 */
export type ProductRecord = {
  id: string;
  name: string;
  line: string;
  description: string;
  images: string[];
  sizes: ProductSizeDefinition[];
  price: Record<string, number>;
  features?: string[];
};

/** Application product model derived from a JSON/CMS record. */
export type Product = ProductRecord & {
  href: string;
  photos: ProductPhoto[];
  features: string[];
  sizeOptions: ProductSize[];
};

/** Validated consultation request payload. */
export type ContactPayload = {
  name: string;
  phone: string;
  message: string;
};
