import React from "react";
import { motion } from "framer-motion";

// Import all images
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

// Put them into an array
const allImages = [
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

// Generate photo objects automatically
const photos = allImages.map((img, i) => ({
  src: img,
  alt: `Black and white photo number ${i + 1}`, // you can customize alt texts later
  width: 400,
  height: 300,
}));

export default function BlackWhiteGallery() {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen p-4">
      <motion.div
        className="flex space-x-4 max-w-full overflow-x-auto no-scrollbar"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        drag="x"
        dragConstraints={{ left: -300, right: 0 }}
        dragElastic={0.2}
      >
        {photos.map(({ src, alt, width, height }, index) => (
          <motion.img
            key={index}
            src={src}
            alt={alt}
            className="flex-shrink-0 object-cover rounded-xl shadow-md"
            style={{ width: width + "px", height: height + "px" }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
