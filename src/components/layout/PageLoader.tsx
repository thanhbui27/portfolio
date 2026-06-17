"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/images/logo.png";

export function PageLoader() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <PageLoaderOverlay
      key={pathname}
      prefersReducedMotion={Boolean(prefersReducedMotion)}
    />
  );
}

function PageLoaderOverlay({
  prefersReducedMotion,
}: {
  prefersReducedMotion: boolean;
}) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      animate={{ opacity: 0 }}
      className="pointer-events-none fixed inset-0 z-[9999] grid place-items-center border-[10px] border-ink bg-blush px-5"
      initial={{ opacity: 1 }}
      onAnimationComplete={() => setIsVisible(false)}
      transition={{
        delay: prefersReducedMotion ? 0.12 : 0.86,
        duration: prefersReducedMotion ? 0.01 : 0.24,
        ease: "easeOut",
      }}
    >
      <motion.div
        animate={prefersReducedMotion ? { y: 0 } : { y: [0, -8, 0] }}
        className="w-full max-w-sm border-4 border-ink bg-paper p-5 shadow-retro"
        transition={{
          duration: 0.7,
          ease: "easeInOut",
          repeat: prefersReducedMotion ? 0 : Infinity,
        }}
      >
        <Image
          alt="THANH.DEV"
          className="logo-glitch mx-auto h-28 w-auto"
          priority
          src={Logo}
        />
        <div className="mt-5 border-4 border-ink bg-white p-1">
          <motion.div
            animate={{ scaleX: 1 }}
            className="h-4 origin-left bg-candy"
            initial={{ scaleX: 0.08 }}
            transition={{
              duration: prefersReducedMotion ? 0.18 : 0.72,
              ease: "easeInOut",
            }}
          />
        </div>
        <p className="mt-4 text-center font-mono text-xs font-bold uppercase text-ink">
          Loading next level
        </p>
      </motion.div>
    </motion.div>
  );
}
