"use client";

import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/motion/FadeIn";
import { ImageZoom } from "@/components/motion/ImageZoom";
import { Container } from "@/components/shared/Container";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Surface } from "@/components/shared/Surface";
import { products } from "@/data/products";
import type { Product } from "@/types";

/**
 * Large clickable product-line card with a four-photo grid.
 */
function ProductLineCard({ product }: { product: Product }) {
  return (
    <Surface className="transition-shadow duration-500 hover:shadow-soft-lg">
      <Link
        href={product.href}
        aria-label={`${product.name} 상세 보기`}
        className="group focus-ring block rounded-[var(--radius-xl)] p-6 sm:p-8 md:p-12 lg:p-16"
      >
        <div className="max-w-2xl">
          <Eyebrow>{product.line}</Eyebrow>
          <h3 className="text-display-lg mt-3 text-foreground sm:mt-4">
            {product.name}
          </h3>
          <p className="text-body-lg mt-4 sm:mt-5 md:mt-6">
            {product.description}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-3 md:mt-14 md:gap-5">
          {product.photos.map((photo) => (
            <ImageZoom key={photo.src} className="bg-cream">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 40vw"
                  className="object-cover"
                />
              </div>
            </ImageZoom>
          ))}
        </div>
      </Link>
    </Surface>
  );
}

/**
 * Luxury product section with three stacked mattress line cards.
 */
export function Products() {
  return (
    <section
      id="products"
      className="section-space"
      aria-labelledby="products-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Products"
            title={
              <span id="products-heading">
                세 가지 라인.
                <br />
                하나의 기준.
              </span>
            }
            description="Premium, Luxury, Signature. 각 라인을 눌러 상세와 상담을 이어가세요."
          />
        </FadeIn>

        <div className="section-stack flex flex-col gap-8 sm:gap-10 md:gap-14 lg:gap-16">
          {products.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.04}>
              <ProductLineCard product={product} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
