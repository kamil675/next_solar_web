import { motion } from "framer-motion";
const e1 = "/e1.webp";
const e2 = "/e2.webp";
const e3 = "/e3.webp";
const e4 = "/e4.webp";
const e5 = "/e5.webp";
const e6 = "/e6.webp";
const e7 = "/e7.webp";
const e8 = "/e8.webp";

const images = [
  {
    src: e1,
    alt: "People walking near solar panels and wind turbine",
  },
  {
    src: e2,
    alt: "Engineer with clipboard near solar panels",
  },
  {
    src: e3,
    alt: "Close-up of solar panels with wind turbine",
  },
  {
    src: e4,
    alt: "Person looking at solar panels and wind turbine",
  },
  {
    src: e5,
    alt: "Person looking at solar panels and wind turbine",
  },
  {
    src: e6,
    alt: "Person looking at solar panels and wind turbine",
  },
  {
    src: e7,
    alt: "Person looking at solar panels and wind turbine",
  },
  {
    src: e8,
    alt: "Person looking at solar panels and wind turbine",
  },
];

const Gallery = () => {
  return (
    <main className="p-4 md:p-6 max-w-7xl mx-auto md:px-12 lg:px-20 xl:px-32">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Removed .concat(images) to avoid duplication */}
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl overflow-hidden group"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-xl object-cover"
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
