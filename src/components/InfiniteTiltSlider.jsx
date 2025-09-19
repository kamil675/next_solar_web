import React from "react";
import { motion } from "framer-motion";

// Import all 32 images
const W1 = "/W1.webp";
const W2 = "/W2.webp";
const W3 = "/W3.webp";
const W4 = "/W4.webp";
const W5 = "/W5.webp";
const W6 = "/W6.webp";
const W7 = "/W7.webp";
const W8 = "/W8.webp";
const W9 = "/W9.webp";
const W10 = "/W10.webp";
const W11 = "/W11.webp";
const W12 = "/W12.webp";
const W13 = "/W13.webp";
const W14 = "/W14.webp";
const W15 = "/W15.webp";
const W16 = "/W16.webp";
const W17 = "/W17.webp";
const W18 = "/W18.webp";
const W19 = "/W19.webp";
const W20 = "/W20.webp";
const W21 = "/W21.webp";
const W22 = "/W22.webp";
const W23 = "/W23.webp";
const W24 = "/W24.webp";
const W25 = "/W25.webp";
const W26 = "/W26.webp";
const W27 = "/W27.webp";
const W28 = "/W28.webp";
const W29 = "/W29.webp";
const W30 = "/W30.webp";
const W31 = "/W31.webp";
const W32 = "/W32.webp";

// All images
const images = [
  W1,
  W2,
  W3,
  W4,
  W5,
  W6,
  W7,
  W8,
  W9,
  W10,
  W11,
  W12,
  W13,
  W14,
  W15,
  W16,
  W17,
  W18,
  W19,
  W20,
  W21,
  W22,
  W23,
  W24,
  W25,
  W26,
  W27,
  W28,
  W29,
  W30,
  W31,
  W32,
];

// Split images into 3 sets
const col1Images = images.slice(0, 11);
const col2Images = images.slice(11, 22);
const col3Images = images.slice(22, 32);

// Single column with infinite scroll
const Column = ({ images, direction = "down", speed = 20 }) => {
  return (
    <motion.div
      className="flex flex-col gap-3"
      animate={{
        y: direction === "down" ? ["-50%", "0%"] : ["0%", "-50%"],
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: speed,
      }}
    >
      {[...images, ...images].map((src, i) => (
        <div
          key={i}
          className="
            w-[140px] h-[80px]        /* mobile */
            sm:w-[160px] sm:h-[90px]  /* small screens */
            md:w-[200px] md:h-[100px] /* tablets */
            lg:w-[220px] lg:h-[110px] /* desktops */
            bg-gray-800 rounded-lg overflow-hidden shadow-md
          "
          style={{
            transform: "rotateX(8deg) rotateY(-8deg) skewX(-4deg)",
          }}
        >
          <img
            src={src}
            alt={`Image ${i + 1}`}
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default function InfiniteTiltSlider() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white px-4">
      {/* Responsive Box */}
      <div
        className="bg-neutral-900 rounded-xl shadow-xl p-4 overflow-hidden border border-gray-700 
                      w-full max-w-[820px] h-[70vh] sm:h-[650px]"
      >
        {/* Grid: 2 cols on mobile → 3 cols on large */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
          <Column images={col1Images} direction="down" speed={150} />
          <Column images={col2Images} direction="up" speed={150} />
          <Column images={col3Images} direction="down" speed={150} />
        </div>
      </div>
    </div>
  );
}
