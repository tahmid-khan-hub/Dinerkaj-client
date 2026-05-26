import type { Variants } from "framer-motion";

export function useFadeSlideVariants(
  direction: "left" | "right" | "up" | "down" = "left",
) {
  const offset = 16;
  const isHorizontal = direction === "left" || direction === "right";
  const value =
    direction === "right" || direction === "down" ? offset : -offset;

  const hiddenPosition = isHorizontal ? { x: value } : { y: value };
  const visiblePosition = isHorizontal ? { x: 0 } : { y: 0 };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, ...hiddenPosition },
    visible: {
      opacity: 1,
      ...visiblePosition,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  return { containerVariants, itemVariants };
}
