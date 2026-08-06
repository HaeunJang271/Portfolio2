import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductPurchasePanel } from "@/components/product/ProductPurchasePanel";
import { Container } from "@/components/shared/Container";
import { Eyebrow } from "@/components/shared/Eyebrow";
import type { Product } from "@/types";

type ProductDetailProps = {
  product: Product;
};

/**
 * Product detail composition with gallery, summary, and consultation panel.
 */
export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <section
      className="bg-cream pt-24 pb-20 sm:pt-28 sm:pb-24 md:pt-36 md:pb-36"
      aria-labelledby="product-title"
    >
      <Container>
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          <ProductGallery photos={product.photos} productName={product.name} />

          <div className="min-w-0 lg:pt-2">
            <Eyebrow>{product.line}</Eyebrow>
            <h1
              id="product-title"
              className="text-display-xl mt-4 text-foreground sm:mt-5"
            >
              {product.name}
            </h1>
            <p className="text-body-lg mt-5 max-w-xl sm:mt-6">
              {product.description}
            </p>

            <ul className="mt-8 space-y-3 border-t border-sand/80 pt-8 sm:mt-10 sm:space-y-4 sm:pt-9 md:mt-12">
              {product.features.map((feature) => (
                <li key={feature} className="text-body">
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-10 sm:mt-12 md:mt-14">
              <ProductPurchasePanel product={product} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
