import { useState } from "react";

const categories = ["Все", "Дома", "Заборы", "Кровля", "Бани", "Беседки"];

const projects = [
  {
    id: 1,
    category: "Бани",
    title: "Баня из оцилиндрованного бревна",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/1dcd3a07-633c-445a-b086-2586ee4ee89c.jpg",
  },

  {
    id: 20,
    category: "Дома",
    title: "Дом из профилированного бруса в процессе строительства",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/91c71b91-2cd0-48e1-a2d0-099ed13a670a.jpg",
  },
  {
    id: 21,
    category: "Дома",
    title: "Двухэтажный дом из бруса зимой",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/6acf3cb2-8327-40f1-89ae-2d448017e909.jpg",
  },
  {
    id: 22,
    category: "Дома",
    title: "Большой двухэтажный дом из бруса с кровлей",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/e97cfc47-b4e9-4e17-adb4-887f557dc383.jpg",
  },
  {
    id: 3,
    category: "Дома",
    title: "Бревенчатый дом крупный план",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/d59a50f4-db81-466a-a3c8-fca34561b848.jpg",
  },
  {
    id: 24,
    category: "Дома",
    title: "Сборка дома из профилированного бруса на винтовых сваях",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/8ee9810d-5e27-4e7d-ad7d-8fdf22454285.jpg",
  },
  {
    id: 25,
    category: "Дома",
    title: "Строительство дома из бруса — монтаж стен",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/1696494a-0e6e-4242-9254-291518a89096.jpg",
  },
  {
    id: 26,
    category: "Дома",
    title: "Дом из бруса — сборка второго этажа",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/65605839-39ec-4049-a318-c87574e74801.jpg",
  },
  {
    id: 27,
    category: "Дома",
    title: "Готовый дом из бруса с кровлей зимой",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/63108a56-ecf1-47a8-b37b-dd4627713376.jpg",
  },
  {
    id: 28,
    category: "Дома",
    title: "Небольшой дом из бруса с окнами",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/a322d610-7ff2-41bb-ac10-6f6e835ea3a3.jpg",
  },
  {
    id: 4,
    category: "Заборы",
    title: "Забор из профнастила зелёный",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/7f20a98a-3a41-47d1-a5c9-737380d3b1d8.jpg",
  },
  {
    id: 5,
    category: "Заборы",
    title: "Забор из евроштакетника",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/7102eeaf-4a58-4da8-8d26-0363c36994d6.jpg",
  },
  {
    id: 6,
    category: "Заборы",
    title: "Забор из профнастила коричневый",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/66d39bd3-2cd5-4713-bc46-ec9a94df31d4.jpg",
  },
  {
    id: 7,
    category: "Заборы",
    title: "Забор жалюзи с кирпичными столбами",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/e85508cc-bb37-4816-a4a6-b7bbec53cc04.jpg",
  },
  {
    id: 8,
    category: "Заборы",
    title: "Забор под дерево с кирпичными столбами",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/272fdc27-c865-4b02-bc0d-8e06ec608272.jpg",
  },
  {
    id: 9,
    category: "Заборы",
    title: "Деревянный штакетник с беседкой",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/a4e12ba9-9e53-494e-b59f-e42a8bc018b7.jpg",
  },
  {
    id: 10,
    category: "Заборы",
    title: "Забор жалюзи тёмно-коричневый",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/e9316d12-a48e-4295-a765-cf4e813eb465.jpg",
  },
  {
    id: 15,
    category: "Бани",
    title: "Баня из бревна — вход",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/ff5e65c2-573d-4034-a509-96a8e5233747.jpg",
  },
  {
    id: 16,
    category: "Бани",
    title: "Парная с полком и стеклянной дверью",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/93339073-3200-4400-a57f-a787069e6c22.jpg",
  },
  {
    id: 17,
    category: "Бани",
    title: "Комната отдыха в бане",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/800620fd-6ba9-43a3-88f4-412e960fe3ea.jpg",
  },
  {
    id: 18,
    category: "Бани",
    title: "Парная с полком и печкой",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/3c742c43-8b02-4114-ab74-156053372cab.jpg",
  },
  {
    id: 19,
    category: "Бани",
    title: "Баня из оцилиндрованного бревна снаружи",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/0ddf44ee-a4d5-4ab0-b1ca-c6d52aa2d0bb.jpg",
  },
  {
    id: 23,
    category: "Беседки",
    title: "Открытая веранда из бруса",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/877f100e-e86f-462d-8adb-d1026ffab7e8.jpg",
  },
  {
    id: 11,
    category: "Кровля",
    title: "Кровля из металлочерепицы антрацит",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/4d963b57-43b7-4f9e-869b-bcf94a6e0ffc.jpg",
  },
  {
    id: 29,
    category: "Кровля",
    title: "Вальмовая кровля из металлочерепицы на доме",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/0c78201e-2814-4718-a067-ee2528a4868a.jpg",
  },
  {
    id: 30,
    category: "Кровля",
    title: "Монтаж стропильной системы вальмовой крыши",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/2d388389-4260-46f1-8720-f849e8d6fa10.jpg",
  },
  {
    id: 31,
    category: "Кровля",
    title: "Готовая кровля из металлочерепицы серая",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/98dc4145-b4bb-491c-8f4c-60627ce6f8a4.jpg",
  },
  {
    id: 12,
    category: "Кровля",
    title: "Кровля из профнастила голубая",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/7340f81a-a9e4-47af-b23f-1517a072d772.jpg",
  },
  {
    id: 13,
    category: "Кровля",
    title: "Кровля из металлочерепицы зелёная",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/6fd54e78-df84-49a9-ae06-155b6402e67c.jpg",
  },
  {
    id: 14,
    category: "Кровля",
    title: "Кровля из металлочерепицы бордо",
    img: "https://cdn.poehali.dev/projects/a5e44b91-db49-438c-8df7-7ab3360c7a8c/bucket/a6279052-3a47-48c7-9d4c-d40d5f12c30d.jpg",
  },
];

export default function Gallery() {
  const [active, setActive] = useState("Все");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "Все" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="bg-neutral-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 uppercase tracking-tight">
          Наши работы
        </h2>
        <p className="text-neutral-500 mb-10 text-lg">Реализованные проекты — смотрите сами</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm uppercase tracking-widest font-semibold transition-colors duration-200 cursor-pointer ${
                active === cat
                  ? "bg-neutral-900 text-white"
                  : "bg-white text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden cursor-pointer aspect-[4/3]"
              onClick={() => setLightbox(project.img)}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <p className="text-white text-sm font-semibold px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </p>
              </div>
              <span className="absolute top-3 left-3 bg-amber-400 text-black text-xs font-semibold px-2 py-1 uppercase tracking-wide">
                {project.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Просмотр"
            className="max-w-full max-h-full object-contain rounded"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-amber-400 transition-colors"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}