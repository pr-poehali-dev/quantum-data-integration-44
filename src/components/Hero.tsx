import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/d59a50f4-db81-466a-a3c8-fca34561b848.jpg"
          alt="Деревянный дом из оцилиндрованного бревна"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 drop-shadow-lg">
          СТРОИМ ДОМ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 drop-shadow mb-6">
          Дома, бани и беседки из оцилиндрованного бревна и профилированного бруса — тепло, надёжность и красота на десятилетия
        </p>
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto mb-8">
          {["Кровельные работы", "Заборы", "Септик", "Отопление", "Сантехника", "Работаем по договору", "Гарантия"].map((item) => (
            <span key={item} className="bg-white/20 border border-white/40 backdrop-blur-sm text-white text-xs md:text-sm px-3 py-1.5 rounded-full drop-shadow">
              {item}
            </span>
          ))}
          <span className="bg-amber-400 border border-amber-300 text-black font-semibold text-xs md:text-sm px-3 py-1.5 rounded-full drop-shadow">
            🎁 Проект дома в подарок
          </span>
        </div>
        <button className="bg-amber-400 text-black px-8 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-amber-300 transition-colors duration-300 cursor-pointer">
          Получить расчёт
        </button>
        <a href="tel:+79022565474" className="block mt-4 text-white text-xl md:text-2xl font-semibold drop-shadow hover:text-amber-400 transition-colors duration-300">
          +7 (902) 256-54-74
        </a>
      </div>
    </div>
  );
}