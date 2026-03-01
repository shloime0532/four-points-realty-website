"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ─── DATA ──────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const PROPERTIES = [
  {
    src: "/images/property-1.png",
    alt: "Modern Colonial Home",
    label: "Colonial Estate",
    details: "4 Bed  |  3 Bath  |  2,800 sqft",
    price: "$549,000",
    span: "sm:row-span-2",
  },
  {
    src: "/images/property-2.png",
    alt: "Contemporary Luxury Home",
    label: "Luxury Contemporary",
    details: "5 Bed  |  4 Bath  |  3,600 sqft",
    price: "$825,000",
    span: "",
  },
  {
    src: "/images/property-3.png",
    alt: "Designer Kitchen",
    label: "Gourmet Kitchen",
    details: "Custom Cabinetry  |  Quartz  |  Island",
    price: "",
    span: "",
  },
  {
    src: "/images/property-4.png",
    alt: "Elegant Living Room",
    label: "Grand Living Room",
    details: "Vaulted Ceilings  |  Fireplace  |  Hardwood",
    price: "",
    span: "sm:row-span-2",
  },
  {
    src: "/images/property-5.png",
    alt: "Luxury Townhouses",
    label: "Premium Townhomes",
    details: "3 Bed  |  2.5 Bath  |  1,900 sqft",
    price: "$399,000",
    span: "",
  },
  {
    src: "/images/property-6.png",
    alt: "Spa-Like Bathroom",
    label: "Master Suite Bath",
    details: "Soaking Tub  |  Walk-in Shower  |  Marble",
    price: "",
    span: "",
  },
];

const SERVICES = [
  {
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    title: "Residential Sales",
    desc: "From starter homes to estates, we match families with their perfect Lakewood home through expert market knowledge and personalized service.",
  },
  {
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "First-Time Buyers",
    desc: "Navigating your first home purchase with confidence. We guide you through every step, from pre-approval to closing day celebration.",
  },
  {
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    title: "Luxury Properties",
    desc: "Exclusive access to Lakewood's most prestigious properties. Discreet, white-glove service for discerning buyers and sellers.",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Investment Properties",
    desc: "Strategic investment opportunities with proven ROI. We analyze cap rates, rental yields, and market trends to maximize your portfolio.",
  },
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    title: "Rentals & Leasing",
    desc: "Quality rental properties across Lakewood. Whether you're seeking your next home or managing investment properties, we deliver results.",
  },
  {
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    title: "Property Valuation",
    desc: "Accurate, data-driven home valuations powered by deep local expertise. Know your home's true worth before making any decisions.",
  },
];

const STATS = [
  { value: "150+", label: "Properties Sold" },
  { value: "15+", label: "Years Experience" },
  { value: "5.0", label: "Google Rating" },
  { value: "$50M+", label: "In Sales Volume" },
];

const TESTIMONIALS = [
  {
    name: "Rachel & David M.",
    role: "First-Time Buyers",
    stars: 5,
    text: "Four Points Realty made buying our first home in Lakewood an absolute dream. They took the time to understand exactly what we needed, walked us through every step, and negotiated a price that was well below asking. We couldn't be happier in our new home.",
  },
  {
    name: "Yehuda K.",
    role: "Home Seller",
    stars: 5,
    text: "We listed with Four Points and had a full-price offer within 10 days. Their marketing was outstanding —professional photography, targeted outreach, and they kept us informed every step of the way. Truly a white-glove experience from start to finish.",
  },
  {
    name: "Sarah L.",
    role: "Investment Property Buyer",
    stars: 5,
    text: "As an investor, I need an agent who understands numbers, not just neighborhoods. The Four Points team analyzed cap rates, rental potential, and market trends to help me find properties that actually perform. They've helped me close on three deals now.",
  },
  {
    name: "Moshe & Chaya F.",
    role: "Growing Family",
    stars: 5,
    text: "We needed to upsize quickly with twins on the way. Four Points found us the perfect 5-bedroom in our exact neighborhood of choice, handled the negotiations, and we were moved in before the due date. Professional, caring, and incredibly efficient.",
  },
];

/* ─── FADE-UP COMPONENT ─────────────────────────────── */

function FadeUp({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}

/* ─── COMPONENTS ────────────────────────────────────── */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/97 shadow-[0_1px_3px_rgba(44,24,16,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="relative z-10 flex-shrink-0">
          <Image
            src={scrolled || open ? "/images/logo.png" : "/images/logo-white.png"}
            alt="Four Points Realty"
            width={180}
            height={40}
            className="h-8 w-auto lg:h-10 transition-all duration-300"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                scrolled ? "text-text" : "text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:7329877722"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg"
          >
            (732) 987-7722
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className={`relative z-10 lg:hidden p-2 ${
            scrolled || open ? "text-primary" : "text-white"
          }`}
          aria-label="Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${
          open ? "max-h-[400px] border-b border-light" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="rounded-lg px-4 py-3 text-left text-base font-medium text-text transition-colors hover:bg-light"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:7329877722"
            className="mt-3 rounded-full bg-accent px-6 py-3 text-center text-base font-semibold text-white transition-all hover:bg-accent-light"
          >
            (732) 987-7722
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero.png"
        alt="Beautiful suburban neighborhood"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent md:text-base">
          Lakewood, NJ&apos;s Premier Brokerage
        </p>
        <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Your Lakewood
          <br />
          <span className="gold-text">Real Estate Experts</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
          Guiding families and investors through every milestone —from first homes to luxury
          estates —with integrity, local expertise, and results that speak for themselves.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="tel:7329877722"
            className="w-full rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-accent-light hover:shadow-xl sm:w-auto"
          >
            Schedule a Consultation
          </a>
          <button
            onClick={() =>
              document.querySelector("#properties")?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full rounded-full border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10 sm:w-auto"
          >
            View Properties
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="properties" className="bg-light py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <FadeUp className="mb-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Featured Listings
          </p>
        </FadeUp>
        <FadeUp className="mb-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            Discover Your Dream Home
          </h2>
        </FadeUp>
        <FadeUp className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-text-light md:text-lg">
            Explore our curated selection of exceptional properties across Lakewood and surrounding
            communities.
          </p>
        </FadeUp>

        {/* Masonry Grid */}
        <div className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[280px]">
          {PROPERTIES.map((p, i) => (
            <FadeUp
              key={i}
              className={`masonry-item ${p.span} cursor-pointer`}
              delay={i * 80}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="masonry-overlay">
                {p.price && (
                  <span className="mb-1 text-xl font-bold text-accent">{p.price}</span>
                )}
                <span className="text-lg font-semibold text-white">{p.label}</span>
                <span className="text-sm text-white/80">{p.details}</span>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-12 text-center">
          <a
            href="tel:7329877722"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3.5 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white"
          >
            View All Listings
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <FadeUp className="mb-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            What We Do
          </p>
        </FadeUp>
        <FadeUp className="mb-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            Full-Service Real Estate
          </h2>
        </FadeUp>
        <FadeUp className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-text-light md:text-lg">
            From your first viewing to the closing table, our team delivers personalized guidance
            backed by deep Lakewood market knowledge.
          </p>
        </FadeUp>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <FadeUp
              key={i}
              className="group rounded-2xl border border-light bg-light/50 p-8 hover:border-accent/30 hover:bg-white hover:shadow-lg"
              delay={i * 80}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary">{s.title}</h3>
              <p className="leading-relaxed text-text-light">{s.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-light py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <FadeUp>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              About Us
            </p>
            <h2 className="mb-6 font-heading text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
              Trusted Experts
              <br />
              in Lakewood Real Estate
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-text-light">
              Four Points Realty has been a cornerstone of the Lakewood real estate community for
              over 15 years. Founded on the principles of integrity, market expertise, and
              client-first service, our brokerage has helped hundreds of families find their
              perfect homes.
            </p>
            <p className="mb-5 leading-relaxed text-text-light">
              Our team of dedicated agents —including David Holtz, Tzvi (Steve) Holtz, Charles
              Klein, and Simcha Salomon —brings diverse specialties spanning residential sales,
              luxury properties, investment analysis, and new developments across Ocean County.
            </p>
            <p className="mb-8 leading-relaxed text-text-light">
              Located at 609 River Ave in the heart of Lakewood, we combine local knowledge with
              cutting-edge marketing to deliver results that consistently exceed expectations.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:7329877722"
                className="rounded-full bg-accent px-7 py-3.5 text-center text-base font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg"
              >
                Call (732) 987-7722
              </a>
              <a
                href="https://maps.google.com/?q=609+River+Ave+Lakewood+NJ+08701"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-primary px-7 py-3.5 text-center text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              >
                Visit Our Office
              </a>
            </div>
          </FadeUp>

          {/* Image */}
          <FadeUp className="relative" delay={200}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/about.png"
                alt="Four Points Realty Office"
                width={700}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Accent card overlay */}
            <div className="absolute -bottom-6 -left-4 rounded-xl bg-primary p-6 shadow-xl md:-bottom-8 md:-left-8">
              <p className="text-3xl font-bold text-accent">15+</p>
              <p className="text-sm font-medium text-white/80">Years Serving<br />Lakewood</p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function StatBar() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
          {STATS.map((s, i) => (
            <FadeUp key={i} className="text-center" delay={i * 100}>
              <p className="text-3xl font-bold text-accent md:text-4xl lg:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm font-medium tracking-wide text-white/70 md:text-base">
                {s.label}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <FadeUp className="mb-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Testimonials
          </p>
        </FadeUp>
        <FadeUp className="mb-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
        </FadeUp>
        <FadeUp className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-text-light md:text-lg">
            Our 5-star reputation is built on genuine relationships and real results.
          </p>
        </FadeUp>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp
              key={i}
              className="flex flex-col rounded-2xl border border-light bg-light/50 p-7 hover:shadow-lg"
              delay={i * 80}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <svg key={j} className="h-5 w-5 star" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <p className="mb-6 flex-1 text-[15px] leading-relaxed text-text-light">
                &ldquo;{t.text}&rdquo;
              </p>
              {/* Author */}
              <div className="border-t border-light pt-4">
                <p className="font-semibold text-primary">{t.name}</p>
                <p className="text-sm text-text-light">{t.role}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-primary py-20 md:py-28"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #C9A962 1px, transparent 1px), radial-gradient(circle at 75% 75%, #C9A962 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center lg:px-8">
        <FadeUp>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Ready to Make Your Move?
          </h2>
        </FadeUp>
        <FadeUp>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
            Whether you&apos;re buying, selling, or investing, our team is here to guide you
            every step of the way. Let&apos;s start the conversation.
          </p>
        </FadeUp>
        <FadeUp className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="tel:7329877722"
            className="w-full rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-accent-light hover:shadow-xl sm:w-auto"
          >
            Call (732) 987-7722
          </a>
          <a
            href="mailto:info@fourpointsrealty.com"
            className="w-full rounded-full border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10 sm:w-auto"
          >
            Send Us an Email
          </a>
        </FadeUp>
        <FadeUp className="mt-10 flex flex-col items-center gap-6 text-white/60 sm:flex-row sm:justify-center sm:gap-10">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">609 River Ave, Lakewood, NJ 08701</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">Mon-Thu 9-6 &bull; Fri 9-1 &bull; Sun by appt</span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1a0f09] py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo-white.png"
              alt="Four Points Realty"
              width={160}
              height={36}
              className="mb-4 h-8 w-auto"
            />
            <p className="text-sm leading-relaxed text-white/50">
              Lakewood&apos;s trusted real estate brokerage. Helping families and investors find
              their perfect property since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() =>
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-sm text-white/50 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a href="tel:7329877722" className="transition-colors hover:text-accent">
                  (732) 987-7722
                </a>
              </li>
              <li>609 River Ave, Lakewood, NJ 08701</li>
              <li>Mon-Thu: 9am - 6pm</li>
              <li>Friday: 9am - 1pm</li>
              <li>Saturday: Closed</li>
              <li>Sunday: By Appointment</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Four Points Realty. All rights reserved. |
            609 River Ave, Lakewood, NJ 08701 | (732) 987-7722
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── MAIN PAGE ─────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Gallery />
      <Services />
      <About />
      <StatBar />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
