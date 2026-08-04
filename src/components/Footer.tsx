export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Компания</h3>
                <a
                  href="#projects"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Проекты
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  О нас
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Связаться
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Услуги</h3>
                <a
                  href="#houses"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Дома
                </a>
                <a
                  href="#baths"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Бани
                </a>
                <a
                  href="#gazebos"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Беседки
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <img
                src="https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/d7e0d227-5b79-47ce-b81e-17e68e8df6de.jpg"
                alt="СК Древград"
                className="mt-4 sm:mt-6 lg:mt-10 h-24 sm:h-32 lg:h-40 w-auto object-contain"
              />
              <div className="flex flex-col items-start sm:items-end gap-3">
                <a
                  href="tel:+79022565474"
                  className="bg-amber-400 hover:bg-amber-300 transition-colors duration-300 text-black font-semibold px-6 py-3 text-sm uppercase tracking-widest"
                >
                  Позвонить
                </a>
                <a
                  href="mailto:drevgrad.dom2026@gmail.com"
                  className="text-white hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  drevgrad.dom2026@gmail.com
                </a>
                <a
                  href="https://vk.ru/drevnt1984"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.85 0 1.25-.303.834-1.114-.408-.79-1.994-2.626-4.037-4.628-1.037-1.03-2.109-1.98-.958-3.559 1.114-1.549 2.638-3.502 3.351-4.518.677-1.017.395-1.767-.882-1.767h-3.2c-.746 0-1.115.408-1.322.937-.395.984-1.29 3.208-2.66 4.674-.917.982-1.334.771-1.539.771-.436 0-.436-.353-.436-.771V6.415c0-.75-.191-1.006-.858-1.006H8.107c-.436 0-.66.267-.66.55 0 .638.937.777.937 2.542v3.4c0 .638-.117.752-.436.752-.887 0-2.916-2.24-4.166-6.031C3.516 6 3.207 5.409 2.46 5.409H-.74c-.85 0-1.02.408-1.02.858 0 .89.85 3.667 3.987 7.376 2.098 2.518 5.055 3.887 7.747 3.887 1.585 0 1.788-.36 1.788-.981v-2.24c0-.752.156-.897.687-.897.375 0 1.037.19 2.512 1.612 1.678 1.68 1.958 2.437 2.9 2.437l.001.533z" />
                  </svg>
                  ВКонтакте
                </a>
                <p className="text-white text-sm sm:text-base">г. Нижний Тагил, ул. Алтайская, 222</p>
                <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} СК Древград НТ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}