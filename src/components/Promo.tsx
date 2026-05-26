import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/d59a50f4-db81-466a-a3c8-fca34561b848.jpg"
            alt="Двухэтажный дом из оцилиндрованного бревна крупный план"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg">
        Беседки и веранды
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-10">
        Создаём уютные беседки и открытые веранды из натурального дерева — идеальное место для отдыха в любое время года.
      </p>
    </div>
  );
}