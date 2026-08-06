/**
 * Formats a KRW amount with thousand separators and a won suffix.
 */
export function formatPrice(amount: number): string {
  return `${amount.toLocaleString("ko-KR")}원`;
}

/**
 * Calculates the total price from a unit price and quantity.
 */
export function calculateTotalPrice(unitPrice: number, quantity: number): number {
  if (unitPrice < 0) {
    throw new Error("Unit price cannot be negative.");
  }

  if (!Number.isInteger(quantity) || quantity < 1) {
    throw new Error("Quantity must be an integer of at least 1.");
  }

  return unitPrice * quantity;
}

/**
 * Clamps quantity between the inclusive min and max bounds.
 */
export function clampQuantity(value: number, min = 1, max = 10): number {
  return Math.min(max, Math.max(min, value));
}
