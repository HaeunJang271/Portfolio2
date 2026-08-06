"use client";

import { useMemo, useState } from "react";

import { ProductSizeTable } from "@/components/product/ProductSizeTable";
import { QuantitySelector } from "@/components/product/QuantitySelector";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { calculateTotalPrice, formatPrice } from "@/lib/pricing";
import type { Product, ProductSize } from "@/types";

type ProductPurchasePanelProps = {
  product: Product;
};

/**
 * Size selection, quantity controls, and live total pricing.
 */
export function ProductPurchasePanel({ product }: ProductPurchasePanelProps) {
  const [selectedSize, setSelectedSize] = useState<ProductSize["size"]>(
    product.sizeOptions[0]?.size ?? "Queen",
  );
  const [quantity, setQuantity] = useState(1);

  const selected = useMemo(
    () =>
      product.sizeOptions.find((size) => size.size === selectedSize) ??
      product.sizeOptions[0],
    [product.sizeOptions, selectedSize],
  );

  const total = selected
    ? calculateTotalPrice(selected.price, quantity)
    : 0;

  return (
    <div className="space-y-10 md:space-y-12">
      <div>
        <Eyebrow className="mb-5">Size</Eyebrow>
        <ProductSizeTable
          sizes={product.sizeOptions}
          selectedSize={selectedSize}
          onSelect={setSelectedSize}
          name={`${product.id}-size`}
        />
      </div>

      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Eyebrow className="mb-4">Quantity</Eyebrow>
          <QuantitySelector value={quantity} onChange={setQuantity} />
        </div>
        <div className="text-left sm:text-right">
          <Eyebrow>Total</Eyebrow>
          <p
            className="mt-3 text-3xl font-light tracking-[-0.02em] text-foreground md:text-4xl"
            aria-live="polite"
          >
            {formatPrice(total)}
          </p>
        </div>
      </div>

      <p className="text-caption">
        결제는 진행하지 않습니다. 하단에서 카카오톡 또는 전화 상담을 이용해 주세요.
      </p>
    </div>
  );
}
