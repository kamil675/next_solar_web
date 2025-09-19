export default function ExactMatchPage1() {
  const logos = [
    "/P1.webp",
    "/P2.webp",
    "/P3.webp",
    "/P4.webp",
    "/P5.webp",
    "/P6.webp",
    "/P7.webp",
    "/P8.webp",
  ];

  return (
    <div className="relative -top-[30px] sm:top-0 min-h-screen About1 translate-y-[-150px] sm:-mt-[50px] lg:-mt-[50px]">
      {/* Heading */}
      <h2 className="lg:text-[30px] xl:text-[30px] 2xl:text-[30px] text-2xl font-bold text-center pt-10 text-green-800 mb-10">
        Our Clients
      </h2>
      {/* Animated Logos */}
      <div className="overflow-hidden py-10 sm:py-16 -mt-16">
        <div
          className="flex space-x-10 px-4 sm:px-8 animate-scroll"
          style={{
            animation: "scroll 20s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {[...logos, ...logos].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Logo ${idx}`}
              className="h-[100px] w-[120px] object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
