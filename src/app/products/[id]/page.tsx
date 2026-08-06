import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetail } from "@/components/product/ProductDetail";
import {
  getAllProductIds,
  getProductById,
} from "@/data/products";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

/**
 * Builds static paths for every mattress line.
 */
export function generateStaticParams() {
  return getAllProductIds().map((id) => ({ id }));
}

/**
 * Builds SEO metadata for a product detail page.
 */
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

/**
 * Product detail route for a single mattress line.
 */
export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
