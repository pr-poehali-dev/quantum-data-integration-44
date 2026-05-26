export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/8a97abdc-21ee-4a12-8c19-3a414c1332f7.jpg"
          alt="Сруб из оцилиндрованного бревна"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Натуральное дерево — вечная классика</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Строим дома, бани и беседки из оцилиндрованного бревна и профилированного бруса. Экологично, тепло и надёжно — с гарантией на каждый объект.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Смотреть проекты
        </button>
      </div>
    </div>
  );
}