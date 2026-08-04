import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "Award",
    title: "Опыт с 2010 года",
    text: "За это время мы накопили огромный багаж знаний и технологий, чтобы ваш дом простоял десятилетия.",
  },
  {
    icon: "Users",
    title: "Своя строительная бригада",
    text: "Мы не нанимаем случайных субподрядчиков. У нас трудятся проверенные, квалифицированные мастера, которые несут прямую ответственность за результат.",
  },
  {
    icon: "Layers",
    title: "Комплексный подход",
    text: "Мы не только возводим стены. В перечень наших услуг также входят профессиональные кровельные работы и установка ограждений (заборов) под ключ.",
  },
  {
    icon: "ShieldCheck",
    title: "Качество и надёжность",
    text: "Гарантируем высокое качество сборки и монтажа. На все виды работ предоставляется официальная гарантия.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-neutral-50 px-6 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">
          О нас
        </h3>
        <h2 className="text-3xl lg:text-5xl text-neutral-900 leading-tight mb-6">
          СК «Древград» — строим из дерева с душой и гарантией с 2010 года
        </h2>
        <p className="text-neutral-700 text-base lg:text-lg leading-relaxed mb-12 max-w-3xl">
          Мы — строительная компания из Нижнего Тагила, которая знает о
          деревянном домостроении всё. Наша специализация: строительство
          домов и бань из оцилиндрованного бревна и профилированного бруса.
        </p>

        <h3 className="uppercase mb-8 text-sm tracking-wide text-neutral-600">
          Почему выбирают нас
        </h3>
        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          {advantages.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center">
                <Icon name={item.icon} size={22} className="text-black" />
              </div>
              <div>
                <h4 className="text-neutral-900 font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-neutral-700 text-base lg:text-lg leading-relaxed">
          За нашими плечами тысячи довольных клиентов, которые уже живут в
          тепле и уюте собственных домов. Свяжитесь с нами, и мы построим дом
          вашей мечты!
        </p>
      </div>
    </section>
  );
}
