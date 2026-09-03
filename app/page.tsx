import NextImage from "next/image";
import type { ComponentProps } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BookOpen,
  Dumbbell,
  Flame,
  HeartHandshake,
  Mail,
  MapPin,
  Mountain,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import MobileMenu from "./mobile-menu";
import VkClipsCarousel from "./vk-clips-carousel";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Image({ src, ...props }: ComponentProps<typeof NextImage>) {
  const resolvedSrc =
    typeof src === "string" && src.startsWith("/")
      ? `${publicBasePath}${src}`
      : src;

  return <NextImage src={resolvedSrc} {...props} />;
}

const socialLinks = [
  ["Telegram", "https://t.me/blagovstyle"],
  ["ВКонтакте", "https://vk.com/blagovstyle"],
];

const projectFacts = [
  { value: "2009", label: "начало проекта «Жизнь без страха»" },
  { value: "30+ / 10+", label: "городов / стран" },
  { value: "300+", label: "событий и образовательных программ" },
  { value: "40 000", label: "участников и выпускников" },
];

const territoryProjects = [
  {
    name: "Горизонт 45",
    type: "Рекреация и экотуризм",
    text: "Концепция у Бухты Космонавтов: размещение, SPA, панорамное кафе, открытый берег и экотропы.",
    image: "/images/project-horizon-45.webp",
    imageAlt: "Обзорная концепция рекреационного проекта Горизонт 45 у моря",
  },
  {
    name: "Элиос",
    type: "Рекреационно-туристический проект",
    text: "Территория в восточном Крыму с туристической и социальной составляющей.",
    image: "/images/project-elios.webp",
    imageAlt: "Побережье и территория рекреационно-туристического проекта Элиос",
  },
  {
    name: "Боспор",
    type: "Клубный формат",
    text: "Камерный земельный проект для сообщества собственников и спокойной жизни в Крыму.",
    image: "/images/project-bospor.webp",
    imageAlt: "Купольное общественное пространство проекта Боспор",
  },
  {
    name: "Благодар",
    type: "Аграрное направление",
    text: "Территория для виноградарства, сельского хозяйства и частных земельных проектов.",
    image: "/images/project-blagodar.webp",
    imageAlt: "Панорама земли и поселения аграрного направления Благодар",
  },
  {
    name: "СКИФ",
    type: "Земля и агротуризм",
    text: "Проект в районе Щёлкино и Семёновки: земля, отдых и агротуристический формат.",
    image: "/images/project-skif.webp",
    imageAlt: "Архитектурная концепция агротуристического проекта СКИФ",
  },
];

const timeline = [
  ["Ранние годы", "Кандидат в мастера спорта по кикбоксингу; серебряный призёр соревнований по зимнему плаванию в Санкт-Петербурге"],
  ["2006", "Фестивальное движение, большие народные игры и первые программы для групп"],
  ["2009", "Начало авторского проекта «Жизнь без страха»"],
  ["2014", "Первый мировой рекорд проекта «Жизнь без страха» — около 70 человек стояли на гвоздях один час; возвращение в Крым и начало работы с недвижимостью"],
  ["2018", "Полуфинал второго сезона проекта «Русский ниндзя» — эфир 14 октября"],
  ["2023", "Регистрация компании «Точка Притяжения» в Керчи"],
  ["2024", "Президент Ассоциации гвоздепрактиков; участие в мировом массовом рекорде по одновременному стоянию на досках с гвоздями"],
  ["2025", "Финал проекта НТВ «Гладиаторы» 28 июня"],
  ["Сегодня", "Девелопмент в Крыму, TOP THAI SPA, телесные практики, изданная книга и работа с сообществом"],
];

function BlagovSolarCrest({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 112 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path className="crest-shield" d="M56 5 99 21v43c0 28-16.6 49.4-43 61C29.6 113.4 13 92 13 64V21L56 5Z" />
      <path className="crest-shield-inner" d="M56 12 92 25v38c0 23.4-13.3 42-36 53-22.7-11-36-29.6-36-53V25L56 12Z" />
      <g className="crest-rays">
        <path d="M56 18v11M56 81v11M19 55h12M81 55h12M30 29l8 8M74 73l8 8M30 81l8-8M74 37l8-8" />
        <path d="m41 21 4.4 10.6M66.6 78.4 71 89M22 40l10.6 4.4M79.4 65.6 90 70M22 70l10.6-4.4M79.4 44.4 90 40M41 89l4.4-10.6M66.6 31.6 71 21" />
      </g>
      <circle className="crest-sun-disc" cx="56" cy="55" r="24" />
      <path className="crest-brow" d="M42.5 48.5c2.8-1.4 5.7-1.4 8.5 0M61 48.5c2.8-1.4 5.7-1.4 8.5 0" />
      <path className="crest-eye-line" d="M44 53c2.1 1.2 4.2 1.2 6.3 0M61.7 53c2.1 1.2 4.2 1.2 6.3 0" />
      <path className="crest-face" d="M56 50v11l-2.5 2.7H58M51.5 69c3 1.8 6 1.8 9 0" />
      <g className="crest-sea">
        <path d="M34 92c4.8-3 9.6-3 14.4 0s9.6 3 14.4 0 9.6-3 14.4 0" />
        <path d="M38 100c4-2.4 8-2.4 12 0s8 2.4 12 0 8-2.4 12 0" />
      </g>
    </svg>
  );
}

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Александр Леонидович Благов",
    alternateName: "Александр Благов",
    url: "https://alexblagov.ru/",
    image: `${publicBasePath}/images/alexander-hero-original-close.webp`,
    jobTitle: "Предприниматель, инвестор, девелопер",
    description:
      "Предприниматель и девелопер, работающий в Крыму; руководитель компании «Точка Притяжения», семейного проекта TOP THAI SPA и автор проекта «Жизнь без страха».",
    worksFor: [
      { "@type": "Organization", name: "Точка Притяжения" },
      { "@type": "Organization", name: "TOP THAI SPA" },
    ],
    sameAs: socialLinks.map(([, href]) => href),
  };

  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Александр Благов — наверх">
          <span className="wordmark-sign"><BlagovSolarCrest className="wordmark-crest" /></span>
          <span className="wordmark-name"><strong>Александр Благов</strong><small>Личный сайт · Крым</small></span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#today">Сегодня</a>
          <a href="#portfolio">Территории</a>
          <a href="#story">Путь</a>
          <a href="#book">Книга</a>
          <a href="#media">Видео</a>
        </nav>
        <MobileMenu />
        <a className="header-contact" href="#contact" aria-label="Перейти к контактам">
          <Mail size={18} strokeWidth={1.7} /><span>Связаться</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">
            <span>Предприниматель.</span>
            <span>Инвестор.</span>
            <span className="hero-accent">Проекты&nbsp;в&nbsp;Крыму.</span>
          </h1>
          <p className="hero-lead">
            Девелопмент, семейный SPA-бизнес и проекты, которые соединяют
            место, человека и живое сообщество.
          </p>
          <div className="hero-status" aria-label="Основные направления">
            <span>Точка Притяжения</span><span>TOP THAI SPA</span><span>Жизнь без страха</span>
          </div>
          <div className="hero-actions">
            <a className="button button-light" href="#today">Чем занимается сегодня <ArrowDown size={18} /></a>
            <a className="text-link light-link" href="mailto:info@alexblagov.ru">Написать <ArrowUpRight size={18} /></a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <Image
              src="/images/alexander-hero-original-close.webp"
              alt="Портрет Александра Благова"
              fill priority unoptimized sizes="(max-width: 820px) 100vw, 45vw" className="portrait"
            />
          </div>
          <div className="location-note"><MapPin size={17} strokeWidth={1.6} /><span>Крым · Керчь</span></div>
        </div>
        <BlagovSolarCrest className="hero-solar-watermark" />
      </section>

      <div className="motion-rail" aria-hidden="true">
        <div className="motion-rail-track">
          <span>Земля</span><i>✦</i><span>Движение</span><i>✦</i><span>Сервис</span><i>✦</i><span>Сообщество</span><i>✦</i><span>Крым</span><i>✦</i>
          <span>Земля</span><i>✦</i><span>Движение</span><i>✦</i><span>Сервис</span><i>✦</i><span>Сообщество</span><i>✦</i><span>Крым</span><i>✦</i>
        </div>
      </div>

      <section className="intro section-light" aria-labelledby="intro-title">
        <div className="section-kicker">Позиция</div>
        <div className="intro-copy">
          <h2 id="intro-title">Создавать то, что остаётся.</h2>
          <p>
            Александр Благов — предприниматель, девелопер, спортсмен и отец.
            Его действующие проекты выросли из многолетней работы с людьми,
            телом, командами и территориями.
          </p>
        </div>
      </section>

      <section id="today" className="today-section section-dark" aria-labelledby="today-title">
        <div className="section-heading on-dark">
          <p className="section-kicker">Сегодня</p>
          <h2 id="today-title">Три направления. Один подход.</h2>
          <p>
            Практичные проекты с понятной ролью: развивать территории,
            создавать качественный сервис и собирать людей вокруг общего дела.
          </p>
        </div>

        <article className="project-feature">
          <div className="project-art-motif" aria-hidden="true">
            <Image src="/images/alexander-office-art-real.webp" alt="" fill unoptimized sizes="340px" />
          </div>
          <div className="project-number">01</div>
          <div className="project-copy">
            <p className="project-type">Девелопмент · Крым · с 2023 года</p>
            <h3>Точка Притяжения</h3>
            <p>
              Александр — учредитель и руководитель компании. Команда работает
              с земельными, рекреационными и туристическими концепциями в
              восточном Крыму.
            </p>
            <span className="project-meta-note">Компания · недвижимость · территории</span>
            <details className="project-disclosure">
              <summary>Что входит в направление</summary>
              <div className="project-disclosure-body">
                <div className="project-disclosure-visual">
                  <Image
                    src="/images/project-horizon-events.webp"
                    alt="Амфитеатр и событийная площадка проекта Горизонт 45"
                    fill
                    unoptimized
                    sizes="(max-width: 820px) 100vw, 28vw"
                  />
                  <span>Восточный Крым · концепция · реализация</span>
                </div>
                <div className="project-disclosure-grid">
                  {territoryProjects.map((project) => (
                    <span key={project.name}><strong>{project.name}</strong><small>{project.type}</small></span>
                  ))}
                </div>
              </div>
            </details>
          </div>
        </article>

        <div className="project-grid">
          <article className="today-card today-spa-card">
            <div className="today-card-preview"><Image src="/images/alexander-top-thai-together-real.webp" alt="Александр и Наталья на открытии TOP THAI SPA" fill unoptimized sizes="(max-width: 820px) 100vw, 32vw" /></div>
            <span>02 · Семейный бизнес</span><h3>TOP THAI SPA</h3>
            <p>Действующий салон тайского массажа и SPA-программ в Керчи.</p>
            <details className="card-disclosure">
              <summary>Подробнее о бизнесе</summary>
              <p>Пространство восстановления с мастерами из Таиланда, традиционными техниками массажа и SPA-ритуалами. Александр развивает сервис, команду и клиентский опыт вместе с семьёй.</p>
              <a href="#spa">Полная информация ниже <ArrowDown size={16} /></a>
            </details>
          </article>
          <article className="today-card today-life-card">
            <div className="today-card-preview today-life-preview">
              <span className="today-life-shot"><Image src="/images/alexander-life-festival-real.webp" alt="Команда фестиваля Жизнь без страха" fill unoptimized sizes="(max-width: 820px) 65vw, 22vw" /></span>
              <span className="today-life-shot"><Image src="/images/alexander-life-festival-motion-real.webp" alt="Живой фестивальный кадр проекта Жизнь без страха" fill unoptimized sizes="(max-width: 820px) 35vw, 12vw" /></span>
            </div>
            <span>03 · Проект с 2009 года</span><h3>Жизнь без страха</h3>
            <p>Методология, программы, телесная практика и работа с сообществом.</p>
            <details className="card-disclosure">
              <summary>Развернуть историю</summary>
              <p>Проект начался с тренингов, квестов и курса «Приключение». В разные годы в него вошли командные испытания, походы, огненные и телесные практики, работа с вниманием, характером и ответственностью.</p>
              <a href="#story">Продолжение ниже <ArrowDown size={16} /></a>
            </details>
          </article>
          <article className="project-principle association-card">
            <HeartHandshake size={30} strokeWidth={1.2} /><span>04 · Практика и рекордное движение</span>
            <p>Президент Ассоциации гвоздепрактиков и основатель движения гвоздестояния в России.</p>
            <div className="association-facts"><strong>6</strong><small>мировых рекордов в биографии</small></div>
          </article>
        </div>
      </section>

      <section id="portfolio" className="portfolio-section section-light" aria-labelledby="portfolio-title">
        <div className="section-heading split-heading portfolio-heading">
          <div><p className="section-kicker">Портфель территорий</p><h2 id="portfolio-title">Восточный Крым</h2></div>
          <p>Земельные, рекреационные и туристические проекты на разных стадиях развития.</p>
        </div>
        <div className="latitude-panel" aria-label="Проекты в Восточном Крыму на 45-й параллели">
          <span className="latitude-value">45°</span><span className="latitude-axis" aria-hidden="true" />
          <div><strong>Восточный Крым</strong><small>море · земля · новые пространства</small></div>
          <MapPin size={32} strokeWidth={1.2} />
        </div>
        <div className="portfolio-grid">
          {territoryProjects.map((project, index) => (
            <article className={index === 0 ? "portfolio-card portfolio-card-featured" : "portfolio-card"} key={project.name}>
              <div className="portfolio-card-visual">
                <Image src={project.image} alt={project.imageAlt} fill unoptimized sizes="(max-width: 820px) 100vw, 34vw" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="portfolio-card-top"><span>{project.type}</span></div>
              <h3>{project.name}</h3><p>{project.text}</p>
              <span className="portfolio-state">Проект в развитии</span>
            </article>
          ))}
        </div>
      </section>

      <section className="cinematic-break" aria-label="Принцип работы">
        <Image src="/images/alexander-crimea-motion-v5.webp" alt="Александр Благов идёт по террасе на крымском побережье" fill unoptimized sizes="100vw" className="cinematic-photo" />
        <div className="cinematic-shade" />
        <div className="cinematic-copy"><span>Принцип</span><h2>Место. Человек. Смысл.</h2><p>Три опоры, на которых строятся нынешние проекты.</p></div>
        <div className="cinematic-orbit" aria-hidden="true"><i /><i /></div>
      </section>

      <section id="spa" className="spa-section" aria-labelledby="spa-title">
        <div className="spa-visual">
          <Image src="/images/alexander-top-thai-event-real.webp" alt="Александр Благов на событии TOP THAI SPA" fill unoptimized sizes="(max-width: 900px) 100vw, 52vw" className="cover-image spa-photo" />
          <div className="spa-badge"><Sparkles size={22} strokeWidth={1.45} /><span>Действующий бизнес · Керчь</span></div>
        </div>
        <div className="spa-copy">
          <p className="section-kicker">Семейный проект</p><h2 id="spa-title">TOP THAI SPA</h2>
          <p className="spa-lead">Пространство тайского массажа, спокойного сервиса и восстановления, которое Александр развивает как семейный бизнес.</p>
          <div className="spa-facts">
            <div><Sparkles size={20} /><span>Мастера из Таиланда</span></div>
            <div><MapPin size={20} /><span>Керчь</span></div>
            <div><HeartHandshake size={20} /><span>Семейный бизнес</span></div>
          </div>
          <div className="spa-actions">
            <a className="button button-dark" href="https://topthaispa.ru/" target="_blank" rel="noreferrer">Сайт и запись <ArrowUpRight size={18} /></a>
            <a className="return-link" href="#today">Вернуться к направлениям ↑</a>
          </div>
        </div>
      </section>

      <section id="family" className="family-section" aria-labelledby="family-title">
        <div className="family-visual">
          <Image
            src="/images/alexander-family-crimea-real.webp"
            alt="Александр Благов с семьёй на крымском побережье"
            fill
            unoptimized
            sizes="(max-width: 900px) 100vw, 64vw"
            className="cover-image family-photo"
          />
          <span className="family-caption">Семья · время вместе</span>
        </div>
        <div className="family-copy">
          <p className="section-kicker">Личное</p>
          <h2 id="family-title">Быть рядом.</h2>
          <p>Александр — отец. Семья остаётся точкой опоры, из которой рождаются внимание к людям, ответственность и энергия для больших дел.</p>
          <div className="family-mark" aria-hidden="true"><BlagovSolarCrest /></div>
        </div>
      </section>

      <section id="story" className="story-section section-light" aria-labelledby="story-title">
        <div className="section-heading split-heading story-heading">
          <div><p className="section-kicker">Живой опыт</p><h2 id="story-title">Движение, огонь и характер</h2></div>
          <p>В программах Александра соединялись походы, командные испытания, народные игры, работа с огнём и системная физическая подготовка.</p>
        </div>
        <div className="story-mosaic">
          <figure className="story-photo story-photo-tall">
            <Image src="/images/alexander-adventure-live.webp" alt="Александр Благов во время выездной командной программы" fill unoptimized sizes="(max-width: 820px) 100vw, 35vw" className="cover-image" />
            <figcaption><Mountain size={19} /> Приключение · движение · команда</figcaption>
          </figure>
          <article className="story-note">
            <div className="story-note-preview"><Image src="/images/alexander-slavic-games-real.webp" alt="Живой кадр со славянских игр и молодецких забав" fill unoptimized sizes="(max-width: 820px) 100vw, 33vw" /></div>
            <div className="story-note-copy"><Flame size={30} strokeWidth={1.25} /><span>Из опыта программ</span>
              <h3>Славянские игрища и молодецкие забавы</h3>
              <p>От больших народных игр и выездного курса «Приключение» — к телесным практикам, спорту и работе с командами.</p>
            </div>
          </article>
          <figure className="story-illustration story-fire-photo">
            <Image src="/images/alexander-fire-live.webp" alt="Александр Благов во время выступления с огнём" fill unoptimized sizes="(max-width: 820px) 100vw, 34vw" className="cover-image" />
            <figcaption>Архив · искусство работы с огнём</figcaption>
          </figure>
          <figure className="story-photo story-photo-wide">
            <Image src="/images/alexander-training-real.webp" alt="Александр Благов на силовой тренировке" fill unoptimized sizes="(max-width: 820px) 100vw, 66vw" className="cover-image" />
            <figcaption><Dumbbell size={19} /> Системная физическая практика</figcaption>
          </figure>
          <figure className="story-photo story-editorial">
            <Image src="/images/alexander-gladiators-ntv-real.webp" alt="Александр Благов на съёмках проекта НТВ Гладиаторы" fill unoptimized sizes="(max-width: 820px) 100vw, 34vw" className="cover-image" />
            <figcaption>«Гладиаторы» · НТВ · 2025</figcaption>
          </figure>
        </div>
        <div id="sport" className="career-strip" aria-label="Телевизионные проекты, спорт и рекорды">
          <article><span>2018 · Первый канал</span><strong>Русский ниндзя</strong><small>полуфинал</small></article>
          <article><span>2025 · НТВ</span><strong>Гладиаторы</strong><small>финал</small></article>
          <article><span>Гвоздестояние</span><strong>6 мировых рекордов</strong><small>рекордное движение</small></article>
          <article><span>Единоборства</span><strong>КМС</strong><small>кикбоксинг</small></article>
        </div>
        <p className="career-note"><Award size={18} /> Также — серебряный призёр соревнований по зимнему плаванию в Санкт-Петербурге.</p>
      </section>

      <section className="legacy-section section-dark" aria-labelledby="legacy-title">
        <div className="legacy-image">
          <Image src="/images/alexander-life-guitar-archive.webp" alt="Александр Благов с гитарой на природе" fill unoptimized sizes="(max-width: 900px) 100vw, 46vw" className="cover-image" />
          <span className="vertical-caption">Практика · внимание · действие</span>
        </div>
        <div className="legacy-copy">
          <p className="section-kicker">С 2009 года</p><h2 id="legacy-title">«Жизнь без страха»</h2>
          <p className="lead-paragraph">Авторский проект вырос из работы с телом, характером и групповой динамикой в большое сообщество.</p>
          <p>В разные годы это были тренинги, квесты, экстремальные туры, фестивали, игровые и телесные практики. Сегодня этот опыт собран в методологию ТОП и книгу.</p>
          <div className="legacy-tags" aria-label="Форматы проекта"><span>Методология ТОП</span><span>Городские программы</span><span>Ретриты и клуб</span><span>Работа с командами</span></div>
          <a className="return-link return-link-dark" href="#today">Вернуться к направлениям ↑</a>
        </div>
      </section>

      <section className="facts-section" aria-labelledby="facts-title">
        <div className="facts-visual">
          <Image src="/images/alexander-life-stage-archive.webp" alt="Александр Благов проводит программу для аудитории" fill unoptimized sizes="(max-width: 820px) 100vw, 34vw" />
          <span>Практика · сцена · работа с людьми</span>
        </div>
        <div className="facts-content">
          <div className="facts-heading"><p className="section-kicker">Масштаб проекта</p><h2 id="facts-title">«Жизнь без страха» в цифрах</h2><p>Показатели приведены по материалам самого проекта.</p></div>
          <div className="facts-grid">
            {projectFacts.map((fact) => <article className="fact-card" key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></article>)}
          </div>
        </div>
      </section>

      <section id="book" className="book-section" aria-labelledby="book-title">
        <div className="book-art-panel">
          <Image src="/images/alexander-book-published-real.webp" alt="Александр Благов с изданной книгой Жизнь без страха" fill unoptimized sizes="(max-width: 900px) 100vw, 43vw" className="book-photo" />
          <span className="book-photo-caption">Изданная книга · печатная версия</span>
        </div>
        <div className="book-copy">
          <Image className="book-copy-motif" src="/images/manuscript-circle-life.webp" alt="" fill unoptimized sizes="420px" aria-hidden="true" />
          <p className="section-kicker">Книга · издана</p><h2 id="book-title">«Жизнь без страха»</h2>
          <p>Личная история и телесно‑ориентированная психология: игровые практики, дисциплина, внимание к себе и опыт создания мест силы. Доступна печатная и аудиоверсия.</p>
          <blockquote><BookOpen size={30} strokeWidth={1.25} /><p>«Обучая других, я каждый раз учусь сам».</p><cite>Александр Благов · книга, стр. 70</cite></blockquote>
          <div className="book-actions">
            <a className="button book-order" href="mailto:info@alexblagov.ru?subject=%D0%97%D0%B0%D0%BA%D0%B0%D0%B7%20%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8%20%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0%20%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B2%D0%B0">Заказать книгу <ArrowUpRight size={17} /></a>
            <a className="book-audio" href="mailto:info@alexblagov.ru?subject=%D0%90%D1%83%D0%B4%D0%B8%D0%BE%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%8F%20%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8">Узнать об аудиоверсии</a>
          </div>
        </div>
      </section>

      <section id="media" className="media-section section-light" aria-labelledby="media-title">
        <div className="section-heading split-heading media-heading">
          <div><p className="section-kicker">Смотреть</p><h2 id="media-title">Видео и выступления</h2></div>
          <p>Публичные выступления, архивные материалы и телевизионные проекты Александра.</p>
        </div>
        <div className="video-layout">
          <div className="video-frame">
            <iframe
              src="https://vk.com/video_ext.php?oid=-143114802&id=456239298&hd=2"
              title="Александр Благов — Мотивация Жизнь без страха"
              loading="lazy"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
              allowFullScreen
            />
          </div>
          <div className="video-copy">
            <PlayCircle size={38} strokeWidth={1.2} /><span>Архив · 2019 · VK Видео</span>
            <h3>Мотивация «Жизнь без страха»</h3>
            <p>Архивный видеоматериал о внутренней опоре, выборе и движении через собственные ограничения.</p>
          </div>
        </div>
        <div className="video-layout video-layout-secondary">
          <div className="video-frame">
            <iframe
              src="https://vk.com/video_ext.php?oid=-127401043&id=456252277&hash=19791cfdae3d84e5"
              title="Финал проекта НТВ Гладиаторы с Александром Благовым"
              loading="lazy"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
              allowFullScreen
            />
          </div>
          <div className="video-copy">
            <PlayCircle size={38} strokeWidth={1.2} /><span>Телепроект · 2025 · VK Видео</span>
            <h3>Финал спортивного шоу «Гладиаторы»</h3>
            <p>Официальный выпуск НТВ: скорость, выносливость и характер Александра в экстремальном соревновательном формате.</p>
          </div>
        </div>
        <VkClipsCarousel />
      </section>

      <section className="timeline-section section-dark" aria-labelledby="timeline-title">
        <div className="timeline-heading">
          <p className="section-kicker">Хронология</p>
          <h2 id="timeline-title">Ключевые этапы</h2>
          <p>События, из которых сложились нынешние направления Александра.</p>
          <div className="timeline-portrait">
            <Image src="/images/alexander-portrait-archive-bw.webp" alt="Архивный портрет Александра Благова" fill unoptimized sizes="(max-width: 820px) 100vw, 31vw" />
          </div>
        </div>
        <ol className="timeline-list">{timeline.map(([year, text]) => <li key={year}><span>{year}</span><p>{text}</p></li>)}</ol>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="contact-lead"><p className="section-kicker">Контакты</p><h2 id="contact-title">Обсудить проект</h2><p>Девелопмент, партнёрство, выступления и авторские программы.</p></div>
        <div className="contact-main">
          <a className="contact-email" href="mailto:info@alexblagov.ru"><span>info@alexblagov.ru</span><ArrowUpRight size={32} strokeWidth={1.4} /></a>
          <div className="social-links" aria-label="Социальные сети">{socialLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}<ArrowUpRight size={14} /></a>)}</div>
        </div>
      </section>

      <footer><span>© 2026 Александр Благов</span><span>Личный сайт · рабочая версия</span><a href="#top">Наверх ↑</a></footer>
    </main>
  );
}
