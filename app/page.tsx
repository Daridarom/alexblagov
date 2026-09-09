import { siteUrl } from "@/lib/site-url";
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
  Send,
} from "lucide-react";
import MobileMenu from "./mobile-menu";
import VkClipsCarousel from "./vk-clips-carousel";
import StageGallery from "./stage-gallery";
import DeferredVideo from "./deferred-video";
import BookAudioPlayer from "./book-audio-player";
import SectionNavigation from "./section-navigation";

import { bookInquiry, crimeaManager, inquiryEmail, personalOffers } from "@/lib/offers";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Image({ src, ...props }: ComponentProps<typeof NextImage>) {
  const resolvedSrc =
    typeof src === "string" && src.startsWith("/")
      ? `${publicBasePath}${src}`
      : src;

  return <NextImage src={resolvedSrc} {...props} />;
}

const socialLinks = [
  ["Telegram-канал Александра", "https://t.me/blagovstyle"],
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
    details: "Общественный берег сохраняется открытым, а основные объекты размещаются выше — так, чтобы архитектура работала вместе с рельефом и видом на море.",
    highlights: ["30 домов на склоне", "Панорамное кафе и SPA", "Амфитеатр и экотропы"],
  },
  {
    name: "Элиос",
    type: "Рекреационно-туристический проект",
    text: "Территория в восточном Крыму с туристической и социальной составляющей.",
    image: "/images/project-elios.webp",
    imageAlt: "Побережье и территория рекреационно-туристического проекта Элиос",
    details: "Проект объединяет природный потенциал территории, туристическую инфраструктуру и сценарии, полезные для местного сообщества.",
    highlights: ["Рекреация", "Туристическая инфраструктура", "Социальная составляющая"],
  },
  {
    name: "Боспор",
    type: "Клубный формат",
    text: "Камерный земельный проект для сообщества собственников и спокойной жизни в Крыму.",
    image: "/images/project-bospor.webp",
    imageAlt: "Купольное общественное пространство проекта Боспор",
    details: "Камерная среда для людей, которым важны соседство, спокойный ритм и понятная организация общего пространства.",
    highlights: ["Участки по 6 соток", "Клубное сообщество", "Камерный формат"],
  },
  {
    name: "Благодар",
    type: "Аграрное направление",
    text: "Территория для виноградарства, сельского хозяйства и частных земельных проектов.",
    image: "/images/project-blagodar.webp",
    imageAlt: "Панорама земли и поселения аграрного направления Благодар",
    details: "Аграрное направление, в котором частные земельные проекты соединяются с виноградарством и долгосрочным развитием территории.",
    highlights: ["Виноградарство", "Сельское хозяйство", "Частные участки"],
  },
  {
    name: "СКИФ",
    type: "Земля и агротуризм",
    text: "Проект в районе Щёлкино и Семёновки: земля, отдых и агротуристический формат.",
    image: "/images/project-skif.webp",
    imageAlt: "Архитектурная концепция агротуристического проекта СКИФ",
    details: "Проект рядом с морем сочетает частные участки, общественную инфраструктуру, семейный отдых и агротуристический сценарий.",
    highlights: ["56 участков", "Банный комплекс", "Спорт и отдых у моря"],
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
    url: siteUrl,
    image: `${siteUrl}images/alexander-hero-real-2023.webp`,
    jobTitle: "Предприниматель, мастер и тренер, автор направления ТОП",
    description:
      "Предприниматель в Крыму, мастер и тренер, автор направления ТОП и книги «Жизнь без страха». Развивает проекты компании «Точка Притяжения».",
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

      <a className="skip-link" href="#journey">Перейти к основному содержанию</a>

      <header className="site-header purpose-header">
        <a className="wordmark" href="#top" aria-label="Александр Благов — наверх">
          <span className="wordmark-sign"><BlagovSolarCrest className="wordmark-crest" /></span>
          <span className="wordmark-name"><strong>Александр Благов</strong><small>Личный сайт · Крым</small></span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#practice">Работа со мной</a>
          <a href="#book">Книга</a>
          <a href="#portfolio">Проекты в Крыму</a>
          <a href="#journey">Мой путь</a>
        </nav>
        <MobileMenu />
        <a className="header-contact" href="#contact" aria-label="Перейти к контактам">
          <Mail size={18} strokeWidth={1.7} /><span>Связаться</span>
        </a>
      </header>

      <SectionNavigation />

      <section className="hero purpose-hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hero-eyebrow">Личный сайт · Крым</p>
          <h1 id="hero-title"><span>Александр</span><span className="hero-accent">Благов</span></h1>
          <p className="hero-role">Предприниматель. Мастер и тренер.<br />Автор направления ТОП.</p>
          <p className="hero-lead">Провожу личные консультации, авторские программы и практики ТОП. Вместе с командой развиваю проекты для жизни и отдыха в Крыму.</p>
          <span className="hero-choice">Выберите направление</span>
          <div className="hero-actions purpose-actions">
            <a className="button button-light" href="#practice">Программы и консультации <ArrowDown size={18} /></a>
            <a className="button button-outline" href="#portfolio">Проекты в Крыму <ArrowDown size={18} /></a>
          </div>
          <a className="hero-book-link" href="#book"><BookOpen size={17} /> Книга «Жизнь без страха»</a>
        </div>

        <div className="hero-visual hero-photo">
          <div className="portrait-frame">
            <picture>
              <source media="(max-width: 820px)" srcSet={`${publicBasePath}/images/alexander-hero-real-2023-mobile.webp`} />
              {/* Native picture selects one source before the image request. */}
              <img src={`${publicBasePath}/images/alexander-hero-real-2023.webp`} alt="Александр Благов" width="2160" height="2700" fetchPriority="high" className="portrait hero-photo-image" />
            </picture>
            <div className="hero-photo-shade" aria-hidden="true" />
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

      <section id="journey" className="journey-section section-light" aria-labelledby="journey-title">
        <div className="section-heading split-heading">
          <div><p className="section-kicker">Мой путь</p><h2 id="journey-title">От личной практики<br />к общим проектам.</h2></div>
          <p>Спорт, работа с группами и предпринимательство — части моего опыта. Сегодня я продолжаю работать как мастер и тренер и развиваю проекты в Крыму.</p>
        </div>
        <ol className="journey-steps">
          <li><span>01 · С чего начинал</span><h3>Спорт и характер</h3><p>Единоборства, физическая подготовка, испытания на выносливость. Опыт дисциплины и работы над собой.</p></li>
          <li><span>02 · Работа с людьми</span><h3>«Жизнь без страха»</h3><p>С 2009 года — программы, события и сообщество. Этот опыт получил продолжение в направлении ТОП и книге.</p></li>
          <li><span>03 · Чем занимаюсь сейчас</span><h3>Практика и Крым</h3><p>Консультации и авторские программы; земельные и туристические проекты вместе с командой «Точки Притяжения».</p></li>
        </ol>
        <a className="journey-more" href="#story">Фотографии, выступления и спортивный путь <ArrowDown size={17} /></a>
      </section>

      <section id="practice" className="practice-section section-dark" aria-labelledby="practice-title">
        <div className="section-heading split-heading on-dark">
          <div><p id="today" className="section-kicker">01 · Работа со мной</p><h2 id="practice-title">Консультации.<br />ТОП. Программы.</h2></div>
          <p>Я — мастер, тренер и автор направления ТОП. В моей работе соединяются телесная практика, движение, внимание и взаимодействие с людьми. Начать можно с личного запроса, знакомства с программой или приглашения для вашей группы.</p>
        </div>
        <div className="offer-grid">
          {personalOffers.map((offer) => (
            <article className="offer-card" key={offer.id} id={offer.id}>
              <span className="offer-number">{offer.number}</span><h3>{offer.title}</h3>
              <p className="offer-for">{offer.forWhom}</p>
              <p>{offer.description}</p>
              <a className="offer-action" href={inquiryEmail(offer.subject, offer.body)}>{offer.action}<ArrowUpRight size={18} /></a>
            </article>
          ))}
        </div>
        <div className="offer-next-step"><span>Как начать</span><p>Выберите тему и отправьте короткий запрос. Мы уточним задачу, предложим подходящий формат и заранее согласуем дату и стоимость. Для мероприятия укажите город, аудиторию и предполагаемую дату.</p></div>
      </section>

      <section id="book" className="book-section" aria-labelledby="book-title">
        <div className="book-art-panel">
          <Image src="/images/alexander-book-published-restored.webp" alt="Александр Благов стоит с книгой «Жизнь без страха» в руках" fill unoptimized sizes="(max-width: 900px) 100vw, 43vw" className="book-photo" />
          <span className="book-photo-caption">Автор · книга · личная история</span>
        </div>
        <div className="book-copy">
          <p className="section-kicker">Книга · издана</p><h2 id="book-title">«Жизнь без страха»</h2>
          <p>Для тех, кто хочет познакомиться с моим подходом через личную историю. В книге — опыт работы с людьми, игровые практики, дисциплина и внимание к себе. Есть печатная и аудиоверсия.</p>
          <blockquote><BookOpen size={30} strokeWidth={1.25} /><p>«Обучая других, я каждый раз учусь сам».</p><cite>Александр Благов · книга, стр. 70</cite></blockquote>
          <BookAudioPlayer />
          <div className="book-actions">
            <a className="button book-order" href={bookInquiry}>Заказать книгу <ArrowUpRight size={17} /></a>
          </div>
          <p className="book-order-note">Заказ по почте: напишите, какой формат вам интересен. Уточним наличие, стоимость и способ получения.</p>
        </div>
      </section>

      <section id="portfolio" className="portfolio-section section-light purpose-portfolio" aria-labelledby="portfolio-title">
        <div className="section-heading split-heading portfolio-heading">
          <div><p className="section-kicker">02 · Развитие Крыма</p><h2 id="portfolio-title">Земля. Проекты.<br />Партнёрство.</h2></div>
          <p>Вместе с командой «Точки Притяжения» развиваю земельные и туристические проекты в восточном Крыму. Здесь можно обсудить покупку участка, инвестиционное участие или деловое партнёрство.</p>
        </div>
        <article className="project-feature">
          <div className="project-latitude-motif" aria-hidden="true"><span>45°</span><i /></div>
          <div className="project-number">01</div>
          <div className="project-copy">
            <p className="project-type">Девелопмент · Крым · с 2023 года</p>
            <h3>Точка Притяжения</h3>
            <p>
              Я — учредитель и руководитель компании. Вместе с командой развиваю
              земельные, рекреационные и туристические проекты в восточном Крыму.
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
                  <span>Восточный Крым · концепции проектов</span>
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

        <div className="participation-grid" aria-label="Способы участия в проектах Крыма">
          <article><span>Для себя</span><h3>Подобрать участок</h3><p>Расскажите о цели покупки, интересующей локации и бюджете. Менеджер уточнит доступные предложения, условия и возможность просмотра.</p><a href={crimeaManager} target="_blank" rel="noreferrer">Обсудить участок <ArrowUpRight size={18} /></a></article>
          <article><span>Для инвестора</span><h3>Обсудить участие</h3><p>Запросите материалы интересующего проекта, его текущий этап и возможные условия участия.</p><a href={crimeaManager} target="_blank" rel="noreferrer">Запросить материалы проекта <ArrowUpRight size={18} /></a></article>
          <article><span>Для бизнеса</span><h3>Предложить партнёрство</h3><p>Представьте вашу команду, опыт и предложение по совместной работе в одном из проектов.</p><a href={crimeaManager} target="_blank" rel="noreferrer">Обсудить сотрудничество <ArrowUpRight size={18} /></a></article>
        </div>
        <div className="latitude-panel" aria-label="Проекты в Восточном Крыму на 45-й параллели">
          <span className="latitude-value">45°</span><span className="latitude-axis" aria-hidden="true" />
          <div><strong>Восточный Крым</strong><small>море · земля · новые пространства</small></div>
          <MapPin size={32} strokeWidth={1.2} />
        </div>
        <div className="portfolio-grid" aria-label="Проекты компании Точка Притяжения">
          {territoryProjects.map((project, index) => (
            <article className={`portfolio-card ${index === 0 ? "portfolio-card-featured" : ""}`} key={project.name}>
              <div className="portfolio-card-visual">
                <Image src={project.image} alt={project.imageAlt} fill unoptimized sizes={index === 0 ? "(max-width: 820px) 100vw, 58vw" : "(max-width: 820px) 100vw, 31vw"} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="portfolio-card-top"><span>{project.type}</span><span>Восточный Крым · 45°</span></div>
              <h3>{project.name}</h3>
              <p>{project.text}</p>
              <details className="portfolio-disclosure">
                <summary>Подробнее о проекте</summary>
                <div className="portfolio-disclosure-body">
                  <p>{project.details}</p>
                  <ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </details>
              <a className="project-inquiry" href={crimeaManager} target="_blank" rel="noreferrer" aria-label={`Обсудить проект «${project.name}» с менеджером`}>Обсудить «{project.name}» <ArrowUpRight size={17} /></a>
            </article>
          ))}
        </div>
        <div className="territory-contact-bar" aria-label="Контакты компании Точка Притяжения">
          <span>Точка Притяжения</span>
          <div>
            <a href="https://t.me/CrimeaPoint" target="_blank" rel="noreferrer">Новости проектов <ArrowUpRight size={16} /></a>
            <a href="https://t.me/top_crimea_manager" target="_blank" rel="noreferrer">Связаться с менеджером <Send size={15} /></a>
          </div>
        </div>
      </section>

      <section className="cinematic-break" aria-label="Принцип работы">
        <Image src="/images/alexander-crimea-motion-v5.webp" alt="Александр Благов идёт по террасе на крымском побережье" fill unoptimized sizes="100vw" className="cinematic-photo" />
        <div className="cinematic-shade" />
        <div className="cinematic-copy"><span>Принцип</span><h2>Место. Человек. Смысл.</h2><p>Три опоры, на которых строятся нынешние проекты.</p></div>
        <div className="cinematic-orbit" aria-hidden="true"><i /><i /></div>
      </section>

      <section id="story" className="story-section section-light" aria-labelledby="story-title">
        <div className="section-heading split-heading story-heading">
          <div><p className="section-kicker">Опыт, на котором строится моя работа</p><h2 id="story-title">Движение, огонь и характер</h2></div>
          <p>В моих программах соединялись походы, командные испытания, народные игры, работа с огнём и физическая подготовка.</p>
        </div>
        <div className="story-mosaic">
          <figure className="story-photo story-photo-tall">
            <Image src="/images/alexander-life-flower-archive.webp" alt="Александр Благов на природе в период проекта Жизнь без страха" fill unoptimized sizes="(max-width: 820px) 100vw, 35vw" className="cover-image" />
            <figcaption><Mountain size={19} /> Живой опыт · природа · свобода</figcaption>
          </figure>
          <article className="story-note">
            <div className="story-note-preview"><Image src="/images/alexander-slavic-games-real.webp" alt="Живой кадр со славянских игр и молодецких забав" fill unoptimized sizes="(max-width: 820px) 100vw, 33vw" /></div>
            <div className="story-note-copy"><Flame size={30} strokeWidth={1.25} /><span>Из опыта программ</span>
              <h3>Славянские игры и молодецкие забавы</h3>
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
        <figure className="practice-band">
          <Image src="/images/alexander-wall-practice-real.webp" alt="Командная мужская практика стенка на стенку" fill unoptimized sizes="(max-width: 820px) 100vw, 86vw" />
          <div className="practice-band-shade" aria-hidden="true" />
          <figcaption><span>Командная практика</span><strong>Стенка на стенку</strong><small>Доверие, взаимодействие и общая сила</small></figcaption>
          <div className="practice-band-line" aria-hidden="true"><i /></div>
        </figure>
        <div id="sport" className="career-strip" aria-label="Телевизионные проекты, спорт и рекорды">
          <article><span>2018 · Первый канал</span><strong>Русский ниндзя</strong><small>полуфинал</small></article>
          <article><span>2025 · НТВ</span><strong>Гладиаторы</strong><small>финал</small></article>
          <article><span>Гвоздестояние</span><strong>6 мировых рекордов</strong><small>рекордное движение</small></article>
          <article><span>Единоборства</span><strong>КМС</strong><small>кикбоксинг</small></article>
        </div>
        <p className="career-note"><Award size={18} /> Также — серебряный призёр соревнований по зимнему плаванию в Санкт-Петербурге.</p>
      </section>

      <section className="live-section section-dark" aria-labelledby="live-title">
        <div className="section-heading split-heading on-dark live-heading">
          <div>
            <p className="section-kicker">Сцена и сообщество</p>
            <h2 id="live-title">Энергия живого взаимодействия.</h2>
          </div>
          <p>
            На выступлениях я работаю с вниманием и доверием группы.
            Для меня важен живой разговор и опыт, который остаётся у участников.
          </p>
        </div>
        <StageGallery />
        <a className="experience-action" href={inquiryEmail(personalOffers[2].subject, personalOffers[2].body)}>Пригласить Александра для вашей группы <ArrowUpRight size={18} /></a>
      </section>

      <details className="history-disclosure">
        <summary>Как развивался проект «Жизнь без страха» <span>История и форматы</span></summary>
      <section className="legacy-section section-dark" aria-labelledby="legacy-title">
        <div className="legacy-image">
          <Image src="/images/alexander-life-guitar-restored-v2.webp" alt="Александр Благов с гитарой на природе" fill unoptimized sizes="(max-width: 900px) 100vw, 46vw" className="cover-image" />
          <span className="vertical-caption">Практика · внимание · действие</span>
        </div>
        <div className="legacy-copy">
          <p className="section-kicker">С 2009 года</p><h2 id="legacy-title">«Жизнь без страха»</h2>
          <p className="lead-paragraph">Я начал «Жизнь без страха» в 2009 году. Работа с телом, характером и группами постепенно выросла в большое сообщество.</p>
          <p>В разные годы это были тренинги, квесты, экстремальные туры, фестивали, игровые и телесные практики. Сегодня этот опыт собран в методологию ТОП и книгу.</p>
          <div className="legacy-tags" aria-label="Форматы проекта"><span>Методология ТОП</span><span>Городские программы</span><span>Ретриты и клуб</span><span>Работа с командами</span></div>
          <a className="return-link return-link-dark" href="#today">Вернуться к направлениям ↑</a>
        </div>
      </section>

      </details>

      <section className="facts-section" aria-labelledby="facts-title">
        <div className="facts-visual">
          <Image src="/images/alexander-life-stage-archive.webp" alt="Александр Благов в славянской рубахе на большом событии проекта Жизнь без страха" fill unoptimized sizes="(max-width: 820px) 100vw, 52vw" />
          <span>Большое событие · сцена · живое сообщество</span>
        </div>
        <div className="facts-content">
          <div className="facts-heading"><p className="section-kicker">Масштаб проекта</p><h2 id="facts-title">«Жизнь без страха» в цифрах</h2><p>Показатели приведены по материалам самого проекта.</p></div>
          <div className="facts-grid">
            {projectFacts.map((fact) => <article className="fact-card" key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></article>)}
          </div>
        </div>
      </section>

      <details className="history-disclosure background-disclosure">
        <summary>Семейный бизнес и общественная работа <span>TOP THAI SPA · «Жизнь без страха» · гвоздестояние</span></summary>
        <div className="project-grid background-grid">
          <article id="spa" className="today-card today-spa-card">
            <div className="today-card-preview"><Image src="/images/alexander-top-thai-together-harmonized.webp" alt="Александр и Наталья на открытии TOP THAI SPA" fill unoptimized sizes="(max-width: 820px) 100vw, 32vw" /></div>
            <span>Семейный бизнес</span><h3>TOP THAI SPA</h3>
            <p>Действующий салон тайского массажа и SPA-программ в Керчи.</p>
            <details className="card-disclosure">
              <summary>Подробнее о бизнесе</summary>
              <p>Вместе с семьёй я развиваю салон в Керчи: мастера из Таиланда, традиционные техники массажа и SPA-программы. Для меня важны команда, качество сервиса и внимание к гостю.</p>
              <div className="detail-photo"><Image src="/images/alexander-top-thai-event-real.webp" alt="Александр Благов на событии TOP THAI SPA" fill unoptimized sizes="(max-width: 820px) 100vw, 32vw" /></div>
            </details>
          </article>
          <article className="today-card today-life-card">
            <div className="today-card-preview today-life-preview">
              <span className="today-life-shot"><Image src="/images/alexander-life-festival-real.webp" alt="Команда фестиваля Жизнь без страха" fill unoptimized sizes="(max-width: 820px) 65vw, 22vw" /></span>
              <span className="today-life-shot"><Image src="/images/alexander-life-festival-motion-real.webp" alt="Живой фестивальный кадр проекта Жизнь без страха" fill unoptimized sizes="(max-width: 820px) 35vw, 12vw" /></span>
            </div>
            <span>Проект с 2009 года</span><h3>Жизнь без страха</h3>
            <p>Методология, программы, телесная практика и работа с сообществом.</p>
            <details className="card-disclosure">
              <summary>Развернуть историю</summary>
              <p>Проект начался с тренингов, квестов и курса «Приключение». В разные годы в него вошли командные испытания, походы, огненные и телесные практики, работа с вниманием, характером и ответственностью.</p>
              <a href="#story">Продолжение ниже <ArrowDown size={16} /></a>
            </details>
          </article>
          <article className="project-principle association-card">
            <Image src="/images/alexander-nail-practice-real.webp" alt="Практика гвоздестояния на природе" fill unoptimized sizes="(max-width: 820px) 100vw, 35vw" className="association-photo" />
            <div className="association-shade" aria-hidden="true" />
            <div className="association-content">
              <HeartHandshake size={30} strokeWidth={1.2} /><span>Практика и рекордное движение</span>
              <p>Президент Ассоциации гвоздепрактиков и основатель движения гвоздестояния в России.</p>
              <div className="association-facts"><strong>6</strong><small>мировых рекордов в биографии</small></div>
            </div>
          </article>
        </div>
      </details>

      <section id="family" className="family-section" aria-labelledby="family-title">
        <div className="family-visual">
          <Image
            src="/images/alexander-family-real-2023.webp"
            alt="Александр и Наталья Благовы с детьми"
            fill
            unoptimized
            sizes="(max-width: 900px) 100vw, 64vw"
            className="cover-image family-photo"
          />
          <span className="family-caption">Семья · Александр, Наталья и дети</span>
        </div>
        <div className="family-copy">
          <p className="section-kicker">Личное</p>
          <h2 id="family-title">Быть рядом.</h2>
          <p>Я — отец. Семья даёт мне опору и напоминает о главном: быть рядом, уделять время близким и отвечать за свои решения.</p>
          <div className="family-mark" aria-hidden="true"><BlagovSolarCrest /></div>
        </div>
      </section>

      <section id="media" className="media-section section-light" aria-labelledby="media-title">
        <div className="section-heading split-heading media-heading">
          <div><p className="section-kicker">Смотреть</p><h2 id="media-title">Видео и выступления</h2></div>
          <p>Мои выступления, архивные материалы и телевизионные проекты.</p>
        </div>
        <div className="video-layout">
          <DeferredVideo src="https://vkvideo.ru/video_ext.php?oid=-143114802&id=456239298&hash=bc17e526c0789def" title="Александр Благов — Мотивация Жизнь без страха" />
          <div className="video-copy">
            <PlayCircle size={38} strokeWidth={1.2} /><span>Архив · 2019 · VK Видео</span>
            <h3>Мотивация «Жизнь без страха»</h3>
            <p>Архивный видеоматериал о внутренней опоре, выборе и движении через собственные ограничения.</p>
          </div>
        </div>
        <div className="video-layout video-layout-secondary">
          <DeferredVideo src="https://vkvideo.ru/video_ext.php?oid=-127401043&id=456252277&hash=19791cfdae3d84e5" title="Финал проекта НТВ Гладиаторы с Александром Благовым" />
          <div className="video-copy">
            <PlayCircle size={38} strokeWidth={1.2} /><span>Телепроект · 2025 · VK Видео</span>
            <h3>Финал спортивного шоу «Гладиаторы»</h3>
            <p>Официальный выпуск НТВ: скорость, выносливость и характер Александра в экстремальном соревновательном формате.</p>
          </div>
        </div>
        <VkClipsCarousel />
      </section>

      <details className="history-disclosure chronology-disclosure">
        <summary>Мой путь по годам <span>Спорт, проекты и выступления</span></summary>
      <section className="timeline-section section-dark" aria-labelledby="timeline-title">
        <div className="timeline-heading">
          <p className="section-kicker">Хронология</p>
          <h2 id="timeline-title">Ключевые этапы</h2>
          <p>События, которые привели меня к нынешним проектам.</p>
          <div className="timeline-portrait">
            <Image src="/images/alexander-portrait-archive-bw.webp" alt="Архивный портрет Александра Благова" fill unoptimized sizes="(max-width: 820px) 100vw, 31vw" />
          </div>
        </div>
        <ol className="timeline-list">{timeline.map(([year, text]) => <li key={year}><span>{year}</span><p>{text}</p></li>)}</ol>
      </section>

      </details>

      <section id="contact" className="contact-section purpose-contact" aria-labelledby="contact-title">
        <div className="contact-lead"><p className="section-kicker">Следующий шаг</p><h2 id="contact-title">Что вы хотите<br />обсудить?</h2><p>Выберите тему — консультация, программа, книга или участие в крымском проекте.</p></div>
        <div className="contact-options">
          <div className="contact-option"><span>Работа с Александром</span><h3>Практика, программы и книга</h3><p>Обращения по почте — с темой вашего запроса.</p><div className="contact-routes">
            {personalOffers.map((offer) => <a key={offer.id} href={inquiryEmail(offer.subject, offer.body)}><span>{offer.action}</span><ArrowUpRight size={18} /></a>)}
            <a href={bookInquiry}><span>Заказать книгу</span><BookOpen size={18} /></a>
          </div><a className="contact-address" href="mailto:info@alexblagov.ru">info@alexblagov.ru</a></div>
          <div className="contact-option"><span>Команда «Точки Притяжения»</span><h3>Проекты в Крыму</h3><p>Для покупки участка, инвестиционного участия и делового партнёрства — менеджер проектов в Telegram.</p><a className="contact-manager" href={crimeaManager} target="_blank" rel="noreferrer">Обсудить участие в проекте <Send size={20} /></a><a className="contact-address" href="https://t.me/CrimeaPoint" target="_blank" rel="noreferrer">Следить за развитием проектов <ArrowUpRight size={16} /></a></div>
        </div>
        <div className="contact-social"><span>Мои публикации и новости</span><div className="social-links">
          <a href="https://t.me/blagovstyle" target="_blank" rel="noreferrer">Telegram-канал <ArrowUpRight size={14} /></a>
          <a href="https://vk.com/blagovstyle" target="_blank" rel="noreferrer">ВКонтакте <ArrowUpRight size={14} /></a>
        </div></div>
      </section>

      <footer className="site-footer">
        <div className="footer-meta"><span>© 2026 Александр Благов</span><span>Практика · Проекты · Крым</span></div>
        <div className="footer-links" aria-label="Социальные сети и навигация">
          <a href="https://t.me/blagovstyle" target="_blank" rel="noreferrer">Telegram-канал <ArrowUpRight size={13} /></a>
          <a href="https://vk.com/blagovstyle" target="_blank" rel="noreferrer">ВКонтакте <ArrowUpRight size={13} /></a>
          <a href="#top">Наверх ↑</a>
        </div>
      </footer>
    </main>
  );
}
