import { CreditCard, Lock, Package, ShoppingCart } from "lucide-react";

/** Icon nodes positioned in the outer composition's percentage coordinate
 * space (0-100, shared with the globe and connection lines). Capped at 4
 * per the brand's "don't crowd the planet" guidance. */
export const ORBIT_ICONS = [
  { Icon: ShoppingCart, x: 60, y: 46, label: "Comercio electrónico" },
  { Icon: Lock, x: 80, y: 28, label: "Seguridad" },
  { Icon: Package, x: 79, y: 58, label: "Paquetes y pedidos" },
  { Icon: CreditCard, x: 94, y: 46, label: "Pagos" },
] as const;

export const GLOBE_CENTER = { x: 55, y: 39 };

/** Approximate continent anchor points within mundo-nico.webp's own frame
 * (percent of the image, not the outer composition) — used to place the
 * "Operaciones en tiempo real" pulse nodes on real landmasses instead of
 * arbitrary coordinates. Tier 3 = main pulsing hub, tier 2 = soft glow,
 * tier 1 = small static point. */
export const REALTIME_NODES = [
  { x: 19, y: 34, tier: 3, delay: 0 }, // Norteamérica
  { x: 27, y: 70, tier: 2, delay: 1.1 }, // Sudamérica
  { x: 49, y: 30, tier: 3, delay: 0.5 }, // Europa
  { x: 52, y: 58, tier: 2, delay: 1.8 }, // África
  { x: 70, y: 34, tier: 3, delay: 0.9 }, // Asia
  { x: 86, y: 68, tier: 1, delay: 2.3 }, // Oceanía
  { x: 14, y: 30, tier: 1, delay: 1.5 }, // Norteamérica (oeste)
  { x: 74, y: 26, tier: 1, delay: 2.6 }, // Asia (norte)
] as const;
