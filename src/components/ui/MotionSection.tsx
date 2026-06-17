"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionSectionProps {
  animateOnMount?: boolean;
  id?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}

export const fadeUpItem = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export function MotionSection({
  animateOnMount = false,
  id,
  children,
  className = "",
  delay = 0,
  stagger = false,
}: MotionSectionProps) {
  return (
    <motion.section
      animate={animateOnMount ? "show" : undefined}
      id={id}
      className={className}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            delay,
            duration: 0.48,
            ease: "easeOut",
            staggerChildren: stagger ? 0.09 : 0,
          },
        },
      }}
      viewport={animateOnMount ? undefined : { once: true, margin: "-80px" }}
      whileInView={animateOnMount ? undefined : "show"}
    >
      {children}
    </motion.section>
  );
}
